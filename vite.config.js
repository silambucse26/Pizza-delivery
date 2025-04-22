import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: "/Pizza-delivery/",
    plugins: [react()],
    base: process.env.React_base_path || "/Pizza-delivery",

});
