import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  // base: "/portfolio/",

  // 手机/局域网设备能访问 dev server
  server: {
    host: true, // 等价于 0.0.0.0
    port: 5173,
    strictPort: true,
  },
});
