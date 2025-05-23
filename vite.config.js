/*
 * @Author: superRice
 * @Date: 2025-04-23 14:36:40
 * @LastEditors: superRice 1246333567@qq.com
 * @LastEditTime: 2025-04-23 23:48:16
 * @FilePath: /IronManVisualizer/vite.config.js
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   server: {
//     host: "0.0.0.0",
//   },
// });

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [vue()],
    server: {
      host: "0.0.0.0",
      cors: true,
    },
    base: env.VITE_APP_BASE_URL || "/",
    resolve: {},
  };
});
