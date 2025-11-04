declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
  VITE_USER_NODE_ENV: "development" | "production" | "test";
  VITE_PUBLIC_PATH: string;
  VITE_PORT: number;
  VITE_PROXY: [string, string][];
}
