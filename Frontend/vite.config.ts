


/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => ({
  plugins: [ tailwindcss(), tsconfigPaths(), react(),...(mode === "test" ? [] : [reactRouter()]), // <- turn off in Vitest
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
}));
