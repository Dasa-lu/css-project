import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssSourcemap from 'vite-plugin-css-sourcemap'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), cssSourcemap()],
    build: {
        sourcemap: true,
        cssCodeSplit: true,
        cssMinify: "lightningcss",
    },
    css: {
        transformer: "lightningcss",
    },
});
