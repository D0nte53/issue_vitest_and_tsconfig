import { defineConfig } from 'vitest/config';
import { sharedConfig } from '@repo/vitest-config';
import path from 'path';
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'


export default defineConfig({
    ...sharedConfig,
    plugins: [react(), tsconfigPaths()],
    test: {
        ...sharedConfig.test,
        environment: 'jsdom',
        setupFiles: ['./__tests__/ui.setup.js'],
        server: {
            deps: {
                inline: ['to-vfile'],
            },
        },
    },
    resolve: {
        alias: {
            'fs': 'empty-module',
            'path': 'path-browserify',
            'url': 'empty-module',
        }
    }
})