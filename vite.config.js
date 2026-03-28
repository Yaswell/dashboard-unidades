import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/dashboard-unidades/", // 👈 IMPORTANTE: Debe ser el nombre del repo entre barras
});
