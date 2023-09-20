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

Soon.

### Using Prisma Studio

You can view / edit database tables using [Prisma Studio](https://www.prisma.io/studio). For this purpose, run the following command:

```
docker-compose exec main yarn prisma:studio
```

After this the studio will be available on the following url:

```
http://localhost:5555
```
