import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: [
      'dictionary-soldier-washer-labels.trycloudflare.com'
    ]
  }
})