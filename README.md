[![NestJs][nestjs-shield]][ref-nestjs]
[![NodeJs][nodejs-shield]][ref-nodejs]
[![Typescript][typescript-shield]][ref-typescript]
[![MySQL][mysql-shield]][ref-mysql]
[![Prisma][prisma-shield]][ref-prisma]
[![JWT][jwt-shield]][ref-jwt]
[![Jest][jest-shield]][ref-jest]
[![Yarn][yarn-shield]][ref-yarn]
[![Docker][docker-shield]][ref-docker]
[![Git][git-shield]][ref-git]

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# NestJS Comic Book Characters

This is a NestJS v10.x application built to interact with data of comic book characters with full CRUD functionality.

The project was created for refinement of NestJS knowledge. It also work as a skills showcase.

**THIS IS A WORK IN PROGRESS**

## Build with

| Name       | Version  |
| ---------- | -------- |
| NestJs | v10.x + |
| NodeJs | v20.11.x + |
| Typescript | v5.3.x + |
| Yarn | v1.22.x + |
| Prisma | v5.x + |
| MySQL | v8.0.x |

## Features

- [x] Database with **Prisma ORM**
- [x] Seeding
- [x] Config variables (using **.env** file and **@nestjs/config**)
- [X] Request validation with DTOs (using **class-validator**)
- [X] Service layer to hold business logic
- [X] Repository layer, allowing another ORM to be used if necessary as long as it respects the established contracts
- [X] Base repository interface using typescript *generics*
- [X] Authentication with *JWT* and *Passport* (the routes are protected with a *guard* using *jwt strategy*)
- [X] Healthcheck route (to help validate the status of the api, indicating if available or not)
- [X] Decorator that allows to get id of authenticated user
- [X] Events and listeners for when character is *created*, *updated* or *deleted*. These events print messages to the console
- [ ] Api documentation (using **Swagger**)
- [ ] Units tests (using Jest)
- [X] File with API endpoints inside folder *workspace* to be used to make requests on **Visual Studio Code** IDE with the extension **REST Client** (for when Postman or Insomnia are not available)
- [x] Dockerfile with multi stage build

## Docs

* [Getting Started](./docs/getting_started.md)
* [Accessing Database With Prisma Studio](./docs/prisma_studio.md)
* [Project Structure](./docs/project_structure.md)
* [Database Structure](./docs/database_structure.md)
* [Development instructions](./docs/development_instructions.md)
* [CORS](./docs/cors.md)
* [Running Tests](./docs/running_tests.md)
* [Available Yarn Scripts](./docs/available_yarn_scripts.md)

## API Documentation

You can get more details about the api endpoints on the following link:

[Api Documentation](./docs/api_documentation.md)

<!-- Badge Shields -->
[nestjs-shield]: https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white
[nodejs-shield]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[typescript-shield]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[mysql-shield]: https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white
[prisma-shield]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[jwt-shield]: https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens
[jest-shield]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[yarn-shield]: https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white
[docker-shield]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[git-shield]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white

<!-- References -->
[ref-nestjs]: http://nestjs.com
[ref-nodejs]: https://nodejs.org
[ref-typescript]: https://www.typescriptlang.org
[ref-mysql]: https://www.mysql.com/
[ref-prisma]: https://www.prisma.io/
[ref-yarn]: https://yarnpkg.com
[ref-jwt]: https://jwt.io
[ref-jest]: https://jestjs.io/docs/getting-started
[ref-docker]: https://www.docker.com/
[ref-git]: https://git-scm.com