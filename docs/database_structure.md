## Database Structure

This is the structure of tables of the database for this application, using the **MySQL** database type.

#### Table: alignment

Table with the types of *alignment* that a character can have. Example: bad.

| Field | Type | Nullable | Description |
|-|-|-|-|  
| id | integer | no | Primary key | 
| name | varchar | no | Name of the alignment |

#### Table: character

Table with data of the *characters*.

| Field | Type | Nullable | Description |
|-|-|-|-|  
| id | integer | no | Primary key | 
| name | varchar | no | Name of the character |
| civilName | varchar | yes | Civil name of the character |
| gender | enum('male', 'female') | no | Gender of the character |
| alignmentId | integer | no | Foreign key to alignment table |
| maritalStatusId | integer | no | Foreign key to marital_status table |
| livingStatusId | integer | no | Foreign key to living_status table |
| created_at | datetime | no | Datetime of creation of the character |
| updatedAt | datetime | no | Datetime of the last update of the character |

#### Table: character_ally

Table with data of the relationship between *character* and *ally*. It is a explicit many-to-many relationship table.

| Field | Type | Nullable | Description |
|-|-|-|-|  
| id | integer | no | Primary key | 
| characterId | integer | no | Foreign key to character table |
| allyId | integer | no | Foreign key to character table |
| addedAt | datetime | no | Datetime of creation of the relationship |

#### Table: character_enemy

Table with data of the relationship between *character* and *enemy*. It is a explicit many-to-many relationship table.

| Field | Type | Nullable | Description |
|-|-|-|-|  
| id | integer | no | Primary key | 
| characterId | integer | no | Foreign key to character table |
| enemyId | integer | no | Foreign key to character table |
| addedAt | datetime | no | Datetime of creation of the relationship |

#### Table: character_power

Table with data of the relationship between *character* and *power*. It is a explicit many-to-many relationship table.

| Field | Type | Nullable | Description |
|-|-|-|-|  
| id | integer | no | Primary key | 
| characterId | integer | no | Foreign key to character table |
| powerId | integer | no | Foreign key to power table |
| addedAt | datetime | no | Datetime of creation of the relationship |

#### Table: character_relative

Table with data of the relationship between *character* and *relative*. It is a explicit many-to-many relationship table.

| Field | Type | Nullable | Description |
|-|-|-|-|  
| id | integer | no | Primary key | 
| characterId | integer | no | Foreign key to character table |
| relativeId | integer | no | Foreign key to character table |
| relationshipTypeId | integer | no | Foreign key to relationship_type table |
| addedAt | datetime | no | Datetime of creation of the relationship |

#### Table: character_team

Table with data of the relationship between *character* and *team*. It is a explicit many-to-many relationship table.

| Field | Type | Nullable | Description |
|-|-|-|-|  
| id | integer | no | Primary key | 
| characterId | integer | no | Foreign key to character table |
| teamId | integer | no | Foreign key to team table |
| status | enum('current', 'former') | no | Status of the character inside the team |
| role | enum('leader', 'member') | no | Role of the character inside the team |
| addedAt | datetime | no | Datetime of creation of the relationship |

#### Table: living_status

Table with data of the *living_status* types that a character can have.

| Field | Type | Nullable | Description |
|-|-|-|-|  
| id | integer | no | Primary key | 
| name | varchar | no | Name of the living_status |

#### Table: marital_status

Table with data of the *marital_status* types that a character can have.

| Field | Type | Nullable | Description |
|-|-|-|-|  
| id | integer | no | Primary key | 
| name | varchar | no | Name of the marital_status |

#### Table: power

Table with data of the *powers* that a character can have.

| Field | Type | Nullable | Description |
|-|-|-|-|  
| id | integer | no | Primary key | 
| name | varchar | no | Name of the power |
| created_at | datetime | no | Datetime of creation of the power |
| updatedAt | datetime | no | Datetime of the last update of the power |

#### Table: relationship_type

Table with the types of *relationship* that a character can have with a relative. Example: father.

| Field | Type | Nullable | Description |
|-|-|-|-|  
| id | integer | no | Primary key | 
| name | varchar | no | Name of the relationship_type |

#### Table: team

Table with data of the *teams* that a character can have.

| Field | Type | Nullable | Description |
|-|-|-|-|  
| id | integer | no | Primary key | 
| name | varchar | no | Name of the team |
| created_at | datetime | no | Datetime of creation of the team |
| updatedAt | datetime | no | Datetime of the last update of the team |

#### Table: user

Table with data of the *users*.

| Field | Type | Nullable | Description |
|-|-|-|-|  
| id | integer | no | Primary key | 
| name | varchar | yes | Name of the user |
| email | varchar | no | Email of the user |
| password | varchar | no | Encrypted password of the user |
| created_at | datetime | no | Datetime of creation of the user |
| updatedAt | datetime | no | Datetime of the last update of the user |
