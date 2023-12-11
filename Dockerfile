#
# DEVELOPMENT
#
FROM node:19.8.1-alpine AS development

# Labelling stage
LABEL stage="development"

# Setting development environment
ENV NODE_ENV=development

# Creating work directory and changing his ownership (to avoid permission denied errors)
RUN mkdir -p /usr/src/app && \
    chown -R node:node /usr/src/app

# Defining work directory for the build process
WORKDIR /usr/src/app

# Copy dependency management files
COPY --chown=node:node package*.json yarn.lock ./

# Set the user to be used when building (the user "node" come with the node image)
USER node

# Install dependencies
RUN yarn install

# Copy source code into work directory
COPY --chown=node:node . .

# Generate Prisma files and build the app
RUN yarn run prisma:generate && yarn run build && yarn cache clean

#
# PRODUCTION
#
FROM node:19.8.1-alpine AS production

# Labelling stage
LABEL stage="production"

# Setting production environment
ENV NODE_ENV=production

# Creating work directory and changing his ownership (to avoid permission denied errors)
RUN mkdir -p /usr/src/app && \
    chown -R node:node /usr/src/app

# Defining work directory for the build process
WORKDIR /usr/src/app

# Copy dependency management files
COPY --chown=node:node --from=development package*.json ./

# Set the user to be used when building (the user "node" come with the node image)
USER node

# Install dependencies, cleaning cache too
RUN yarn install --production --ignore-scripts --prefer-offline && yarn cache clean --force

# Copy final application code into work directory
COPY --chown=node:node --from=development /usr/src/app/dist ./dist
COPY --chown=node:node --from=development /usr/src/app/.env .env

# Copy Prisma files into work directory
COPY --chown=node:node --from=development /usr/src/app/node_modules/.prisma/client  ./node_modules/.prisma/client

# Expose port
EXPOSE 3000

# Execute command
CMD ["node", "dist/src/main"]