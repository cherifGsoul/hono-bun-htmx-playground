import { defineConfig } from "vite";
import path from "path";

const projectRootDir = path.resolve(__dirname); // @TODO replace __dirname with the recommended value
export default defineConfig({
    build: {
        emptyOutDir: false,
        outDir: './public',
        manifest: true,
        sourcemap: true,
        rollupOptions: {
            // Use a custom non-html entry point
            input: path.resolve(projectRootDir, './assets/js/main.js'),
        },
    },
    resolve: {
        alias: [
            {
                find: 'app',
                replacement: path.resolve(projectRootDir, './assets/js'),
            },
        ],
    },
})