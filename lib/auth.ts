import { betterAuth } from 'better-auth'

export const auth = betterAuth({
  socialProviders: {
    microsoft: {
      clientId: process.env.AZURE_CLIENT_ID as string,
      tenantId: process.env.AZURE_TENANT_ID as string,
      clientSecret: process.env.AZURE_CLIENT_SECRET as string,
    }
  }
})
