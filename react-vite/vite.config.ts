import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const isProduction = process.env.NODE_ENV === 'production'

const includeOnDev = [
  '**/*.ts',
  '**/*.config.ts',
  '**/*.tsx',
  '**/tests/**/*.spec.ts',
  '**/tests/**/*.spec.tsx',
  '**/tests/**/*.test.ts',
  '**/tests/**/*.test.tsx',
  'dist/types/**/*.ts',
]
const includeOnProd = ['**/*.ts', '**/*.tsx']

/**
 * https://vitejs.dev/config/
 *
 * dts > include : alternative to include option in tsconfig
 */
export default defineConfig({
  build: {
    sourcemap: isProduction ? false : true,
  },
  plugins: [
    react(),
    dts({
      include: isProduction ? includeOnProd : includeOnDev,
    }),
  ],
})
