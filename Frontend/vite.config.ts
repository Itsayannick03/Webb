/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Kolla om vi kör Vitest
const isTest = process.env.vitest === "true"; 


export default defineConfig({
  plugins: [
    tailwindcss(),
    tsconfigPaths(), 
    //  Turns off react router when tests are running. 
    ...(isTest ? [] : [reactRouter()]),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
















