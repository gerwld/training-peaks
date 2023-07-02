import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [jsconfigPaths(), react()],
  base: "/training-peaks",
  baseUrl: "/training-peaks",
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  server: {
    proxy: {
      "/api": {
        target: "http://3.76.81.252:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    mainFields: [],
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
});
