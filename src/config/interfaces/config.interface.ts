export interface ConfigProps {
  app: AppConfigProps;
  cors: CorsConfigProps;
  pagination: PaginationConfigProps;
  database: DatabaseConfigProps;
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
