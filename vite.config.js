import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/RTK-multi-page-from/', // Correct base path
  esbuild: {
    loader: 'jsx', // Set correct loader for jsx
    include: /src\/.*\.jsx?$/, // Include all jsx files in src folder
    exclude: [],
  },
})
