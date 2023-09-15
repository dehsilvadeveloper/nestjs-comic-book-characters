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

This is a NestJS v9.x application built to interact with data of comic book characters with full CRUD functionality.

The project was created for refinement of NestJS knowledge. It also work as a skills showcase.

**THIS IS A WORK IN PROGRESS**

## Build with

| Name       | Version  |
| ---------- | -------- |
| NestJs | v9.x |
| NodeJs | v19.8.x + |
| Typescript | v4.9.x + |
| Yarn | v1.22.x + |
| Prisma | v5.x + |
| MySQL | v8.0.x |

## Objectives

* Use separeted config files to define options of some parts of the application, avoiding direct access to environment variables
* Use GraphQL with **code-first** approach using decorators
* Enable or disable **GraphQL Playground** based on option of config file
* Use SQLite for database type
* Use Prisma for database modelling and migration
* Seed initial data on the database after migration
* Use modular approach to organize logic
* Use Data Transfer Objects (DTOs) to transport groups of data between the application layers and to validate input data
* Reuse DTO for create order on the DTO for update order using PartialType and/or OmitType
* Use **transform** decorator to format dates of entity classes only when they are serialized to JSON
* Use **interceptors** to convert errors to exceptions
* Use concepts of service pattern, with short service classes
* Throw custom errors based on the Prisma exceptions types
* Only allow cancel action on pending orders
* Only allow refund action on paid orders
* Only allow remove action on pending orders
* List orders with filter, pagination and sort
* Use soft delete approach on the remove actions
* Create a module for health check (using GraphQL and **Terminus**)
* Create tests for the application using JEST
* Use fixture classes as mocked data for tests

## Docs

* [Getting Started](./docs/getting_started.md)
* [Getting Started (For Windows users)](./docs/getting_started_for_windows.md)
* [Database Structure](./docs/database_structure.md)
* [CORS](./docs/cors.md)
* [Running Tests](./docs/running_tests.md)
* [Available Make Scripts](./docs/available_make_scripts.md)
* [Available YARN Scripts](./docs/available_yarn_scripts.md)

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