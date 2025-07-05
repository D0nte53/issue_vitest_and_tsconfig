import { defineConfig } from 'vitest/config';
import path from 'path';
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['../../test-setup/ui.setup.js'],
        include: ['**/*.{test,spec}.{ts,tsx}'],
        exclude: [
            'node_modules/**',
            'dist/**',
            'build/**',
            '**/*.d.ts'
        ],
        coverage: {
            provider: 'istanbul',
            reporter: ['text', 'json', 'html'],
            exclude: [
                'node_modules/**',
                'dist/**',
                'build/**',
                '**/*.d.ts',
                '**/*.config.{js,ts}',
                '**/index.ts'
            ]
        }
    },
    resolve: {
        alias: {
            '@ju-utils': path.resolve(__dirname, 'src/utils'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@providers': path.resolve(__dirname, 'src/providers'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@': path.resolve(__dirname, 'src'),
        }
    },
})
