## Project Structure

This application follow this directory structure.

```sh
prisma/ # Prisma related classes
├── migrations/ # Classes to create the tables structure on the database
├── seeders/ # Classes to fill database tables with initial data
└── schema.prisma # Class with the schema established for the database
src/
├── config/ # Files with configuration constants related to various aspects of the application
├── modules
│   ├── app/ # This module works as entrypoint for the application
│   ├── auth/ # This module contains guards, stragegies, among other things related to api authentication
│   ├── common/  # This module contains decorators, enums, rules, interceptors, among other things that are used in the whole application
│   ├── database/ # This module contains repositories implementation separated according to ORM (Object Relational Mapping) type
│   │   ├── prisma/
│   │   │   └── repositories/
│   │   ├── typeorm/
│   │   │   └── repositories/
│   ├── character/ # A module example that manages "character" resource
│   │   ├── controller/
│   │   │   └── character.controller.ts
│   │   ├── dtos/ # Classes used to validate data entering the application
│   │   │   └── create-character.dto.ts
│   │   │   └── update-character.dto.ts
│   │   ├── entities/ # Model classes
│   │   │   └── character.entity.ts
│   │   ├── errors/ # Error classes used on some application layers, like the service layer
│   │   │   └── character-not-found.error.ts
│   │   ├── repositories/ # Established contracts for repositories classes related to the resource
│   │   │   └── character.repository.interface.ts
│   │   ├── services/ # Service classes responsible for business logic
│   │   │   └── character.service.ts
│   │   ├── types/ # Classes used to map the expected responses for methods
│   │   │   └── character.type.ts
│   │   ├── view_models/ # Classes used to format responses on the controllers methods
│   │   │   └── character.view-model.ts
└── main.ts # Entrypoint of the whole application
```