## Available Yarn Scripts

## For Prisma

#### `yarn run prisma:generate`

Generate a updated Prisma Client JS.

#### `yarn run prisma:studio`

Open the Prisma Studio on the browser, allowing to see the models and data created.

#### `yarn run prisma:make:migration`

Create a new migration file to apply changes on the database.

#### `yarn run prisma:migrate:run-dev`

Run migrations for development environment using Prisma.

#### `yarn run prisma:migrate:run-prod`

Run migrations for production environment using Prisma.

#### `yarn run prisma:migrate:reset`

Reset the database to his initial state, truncating all tables, deleting all existing migration files in prisma/migrations (except for migration-lock.toml) and generating a new empty initial migration *migration-init.sql*. It is useful for development scenarios when you want to quickly clear the database.

**DO NOT USE THIS ON PRODUCTION ENVIRONMENT**.

#### `yarn run prisma:seed`

Seed (fill) data to the database using Prisma. It is possible to run a specific seeder class using the *--only*.

Example:

```shell
yarn run prisma:seed --only user-seeder
```

## For tests

#### `yarn run test`

Run tests.

#### `yarn run test -t {TEST FILE NAME}`

Run specific test.

#### `yarn run test:e2e`

Run end to end tests.

#### `yarn run test:cov`

Run coverage tests.
