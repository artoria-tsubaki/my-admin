import { defineConfig, loadEnv, type ConfigEnv, type UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import { wrapperEnv } from "./build/getEnv";
import { createProxy } from "./build/proxy";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  return {
    base: viteEnv.VITE_PUBLIC_PATH, // 设置打包路径,影响打包后资源的 URL
    root, // 设置根目录
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    plugins: [vue(), eslintPlugin()],
    server: {
      host: "0.0.0.0",
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true,
      proxy: createProxy(viteEnv.VITE_PROXY)
    },
    build: {
      outDir: "dist", // 指定输出路径
      minify: "esbuild",
      sourcemap: false, // 是否生成 source map 文件
      reportCompressedSize: false, // 禁用 gzip 压缩大小报告
      chunkSizeWarningLimit: 2000, // 允许的最大块大小（以 kbs 为单位）
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  };
});
