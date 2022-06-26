import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://jjf7.github.io/react-rest-api-marvel-vitejs/",
  plugins: [react()]
})
