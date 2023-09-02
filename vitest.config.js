/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      statements: 100,
      functions: 100,
      branches: 100,
      lines: 100,
    },
    clearMocks: true,
    resetMocks: true,
    resetModules: true,
  },
});
