import 'koa';
import 'app';

declare module 'koa' {
  interface mysql {
    get(name: String, find: {}): Promise<any>;

    query(sql: String, values?: any[]): Promise<any>;

    select(name: String, values?: {}): Promise<any>;

    insert(name: String, value: {}): Promise<any>;
    update(name: String, value: {}, options?: {}): Promise<any>;
    delete(name: String, options?: {}): Promise<any>;
    beginTransaction(): any;
  }

  interface Application {
    mysql: mysql;
  }
}

declare module 'app' {
  interface mysql {
    get(name: String, find: {}): Promise<any>;

    query(sql: String, values?: any[]): Promise<any>;

    select(name: String, values?: {}): Promise<any>;

    insert(name: String, value: {}): Promise<any>;
    update(name: String, value: {}, options?: {}): Promise<any>;
    delete(name: String, options?: {}): Promise<any>;
    beginTransaction(): any;
  }

  interface Application {
    mysql: mysql;
  }
}
