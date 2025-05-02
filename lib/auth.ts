import { betterAuth } from 'better-auth'
import { jwt } from 'better-auth/plugins'

export const auth = betterAuth({
  plugins: [
    jwt()
  ],
  socialProviders: {
    microsoft: {
      clientId: process.env.AZURE_CLIENT_ID as string,
      tenantId: process.env.AZURE_TENANT_ID as string,
      clientSecret: process.env.AZURE_CLIENT_SECRET as string,
    }
  }
})
