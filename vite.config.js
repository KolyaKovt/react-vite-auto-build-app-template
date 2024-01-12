import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    root: "./", // the root directory (where index.html is located)
    base: "./", // the base of the paths in output directory (what paths in the dist directory are gonna begin with)
    build: {
      outDir: "./dist", // the output directory (dist folder) (it's also the path from index.html to the dist folder)
    },
    plugins: [react()],
  };
});
