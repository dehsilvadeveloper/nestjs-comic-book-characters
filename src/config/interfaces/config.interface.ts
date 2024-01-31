export interface ConfigProps {
  app: AppConfigProps;
  cors: CorsConfigProps;
  pagination: PaginationConfigProps;
  sorting: SortingConfigProps;
  database: DatabaseConfigProps;
  password: PasswordConfigProps;
  jwt: JwtConfigProps;
}

export interface AppConfigProps {
  environment: string;
  debug: boolean;
  name: string;
  displayName: string;
  description: string;
  timezone: string;
  http: {
    url: string;
    port: number;
    portExternal: number;
  };
  globalPrefix: string;
  versioning: {
    enable: boolean;
    prefix: string;
    version: string;
  };
}

export interface CorsConfigProps {
  enabled: boolean;
}

export interface PaginationConfigProps {
  pageSize: number;
}

export interface SortingConfigProps {
  sortOrder: string;
}

export interface DatabaseConfigProps {
  mysql: {
    type: string;
    host: string;
    port: number;
    portExternal: number;
    database: string;
    username: string;
    password: string;
    connectionTimeout: number;
  };
}

export interface PasswordConfigProps {
  roundsOfHashing: number;
}

export interface JwtConfigProps {
  secret: string;
  expiration: string;
}
