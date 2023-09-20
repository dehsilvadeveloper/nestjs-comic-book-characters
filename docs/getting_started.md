## Getting started

### Install

These are the instructions to install the application, make it ready for use. Open a terminal on the root of the project and follow the steps.

1. Duplicate the `.env.example` file, renaming the copy to `.env`. This file contains the environments variables that will be used for the application.

```
cp .env.example .env
```

2. Startup containers via docker-compose.

```
docker-compose up --build -d
```

3. Now you need to run the migrations, creating the database structure for the application. For this you have to use the following command:

```
docker-compose exec main yarn run prisma:migrate:run-dev
```

4. The next step is to seed the database, filling the tables with necessary data. Usually the *migration process* immediately invoke the *seed process* on its conclusion, with no additional user action required.

If you look at the database and see that no table has data (at least one of them should have), use the following command to run the seed process manually:

```
docker-compose exec main yarn run prisma:seed
```

5. After following the setup steps, the application is ready to use on the following url:

```
http://localhost:3333/api/v1
```

The url may vary depending on the variables defined in the .env file.

You only need to make the setup procedure once.

### Starting the application

If you want to start the application, use the following command:

```
docker-compose up -d
```

This command will get up all Docker containers, making the application ready to use.

The `-d` means that the terminal will be *detached*, in other words, it won't be necessary to keep the terminal open for the application to keep running. If you run the command without the `-d`, the terminal will have to be keep open.

```
docker-compose up
```

It will be possible to see the watch messages from the application live.

### Shutting down the application

If you want to stop the application, use the following command:

```
docker-compose down
```

This command will get down all Docker containers and the application will not be available for use anymore.

If you started the application without the `-d`, you will need to use the following key combination on the opened terminal:

`ctrl + c`

### Testing the API enpoints

To test the API endpoints you will need a program that can perform http requests. You can use **Postman** or **Insomnia**, for example.

[Postman](https://www.postman.com/downloads/)

[Insomnia](https://insomnia.rest/download)
