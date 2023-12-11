## Development instructions

### Enter Nest container

To enter the container of *Nest*, you can use the following command:

```
docker-compose exec main /bin/sh
```

:warning: **Warning** :warning: 

For those that use *Git Bash for Windows*, it will attempt to convert the file path to a windows file path, which will cause problems because the docker containers are Linux.

One workaround is to add an extra slash at the beginning of the path. This tells Git Bash to not convert it.

```
docker-compose exec main //bin/sh
```

### Enter MySQL container

To enter the container of *MySQL*, you can use the following command:

```
docker-compose exec mysql mysql -u root -p
```

The terminal will ask for the password and you should inform the answer *root*. After this you will be able to run any necessary SQL queries.

You can, for example, see the databases created.

```
SHOW DATABASES;
```

This query is useful to see if the application created the related database with success. The name of the database is available on environment variable *DB_DATABASE*. The default database name for this project is *nestjs_comic_character*.

You can also see the tables inside a database with the following query:

```
USE nestjs_comic_character; SHOW TABLES;
```

### Restarting the containers

To restart a *Docker* container you can simply run:

```
docker restart <name-of-container>
```

Example:

```
docker restart nestjs-comic-characters-main
```

### Building the containers

To remake the build of a container, considering the development stage, you can simply run:

```
docker build --target development .
```

or if you want more details of the steps been performed:

```
docker build --progress=plain --target development .
```

To remake the build for production stage, run:

```
docker build --target production .
```

### See watch messages of Nest

You can see the watch messages of *Nest* without enter the container. For this use the following command:

```
docker logs -f <name-of-container>
```

Example:

```
docker logs -f nestjs-comic-characters-main
```

### Dependencies for local development

If you try to modify files of the project on your IDE, it will warn you about missing dependencies. This happen because the modules exists only inside the container, so the IDE cannot see it.

To overcome this issue, open a terminal on the root of the project and run:

```
yarn install
```

This will install the dependencies on the local folder.

### Dependencies changes

Installing dependencies via `yarn install` won't mount the localy installed modules into the docker context, since the anonymous volumes aren’t removed until their parent container is removed.

To overcome this issue simply run:

```
docker-compose up --build -V -d
```

The `--build` parameter will make sure the yarn install is run (during the build process), and the `-V` argument will remove any anonymous volumes and create them again.

### Database schema changes

Database schema changes won't be immediately reflected on the MySQL database. It will be necessary to update the schema via *Prisma Client* with the following command:

```
docker-compose exec main yarn run prisma:migrate:run-dev
```

### Using Prisma Studio

You can view / edit database tables using [Prisma Studio](https://www.prisma.io/studio). For this purpose, run the following command:

```
docker-compose exec main yarn prisma:studio
```

After this the studio will be available on the following url:

```
http://localhost:5555
```
