import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/JoJosSidekick/',  //this is base url of your website
  plugins: [react()]
})
