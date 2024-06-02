import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    prerender: {
      routes: ["/"],
    },
    baseURL: process.env.BASE_PATH,
    preset: "static",
  },
});
