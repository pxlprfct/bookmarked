/// <reference types="vitest" />
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      thresholds: {
        statements: 100,
        functions: 100,
        branches: 100,
        lines: 100,
      },
      exclude: [...configDefaults.exclude, 'lint-staged.config.js'],
    },
    clearMocks: true,
    mockReset: true,
  },
});
