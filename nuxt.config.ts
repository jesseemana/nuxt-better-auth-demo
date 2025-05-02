// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      MAP_BOX_KEY: process.env.MAP_BOX_KEY,
      BASE_URL: process.env.BASE_URL,
      UPLOAD_URL: process.env.UPLOAD_URL,
      AUTH_SECRET: process.env.AUTH_SECRET,
      AZURE_CLIENT_ID: process.env.AZURE_CLIENT_ID,
      ACCESS_TOKEN: process.env.ACCESS_TOKEN,
      AZURE_TENANT_ID: process.env.AZURE_TENANT_ID,
      AZURE_CLIENT_SECRET: process.env.AZURE_CLIENT_SECRET,
      IP_API_KEY: process.env.IP_API_KEY,
    }
  },
})
