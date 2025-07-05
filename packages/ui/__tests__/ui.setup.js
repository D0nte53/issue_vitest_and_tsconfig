import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock des modules Node.js qui ne fonctionnent pas dans jsdom
vi.mock('fs', () => ({
    default: {
        readFileSync: vi.fn(),
        writeFileSync: vi.fn(),
        existsSync: vi.fn(() => false),
        mkdirSync: vi.fn(),
        readdirSync: vi.fn(() => []),
    },
    readFileSync: vi.fn(),
    writeFileSync: vi.fn(),
    existsSync: vi.fn(() => false),
    mkdirSync: vi.fn(),
    readdirSync: vi.fn(() => []),
}))

vi.mock('path', async () => {
    const actual = await vi.importActual('path')
    return {
        ...actual,
        resolve: vi.fn((...paths) => paths.join('/')),
        join: vi.fn((...paths) => paths.join('/')),
    }
})

// Configuration globale pour les tests UI
global.ResizeObserver = class ResizeObserver {
    constructor(cb) {
        this.cb = cb;
    }
    observe() {
        return null;
    }
    unobserve() {
        return null;
    }
    disconnect() {
        return null;
    }
};

// Mock pour window.matchMedia si nécessaire
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // Deprecated
        removeListener: vi.fn(), // Deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});