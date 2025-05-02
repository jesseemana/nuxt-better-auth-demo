import { auth } from '~/lib/auth'

export default defineEventHandler(event => auth.handler(toWebRequest(event)))

// import AzureADProvider from 'next-auth/providers/azure-ad'
// import axios from 'axios'
// import { NuxtAuthHandler } from '#auth'
// import { SecurityGroupResponse } from '~/types'

// const config = useRuntimeConfig().public

// export default NuxtAuthHandler({
//   secret: config.AUTH_SECRET,

//   providers: [
//     // @ts-expect-error You need to use .default here for it to work during SSR.
//     AzureADProvider.default({
//       clientId: config.AZURE_CLIENT_ID,
//       tenantId: config.AZURE_TENANT_ID,
//       clientSecret: config.AZURE_CLIENT_SECRET,
//     })
//   ],

//   callbacks: {
//     jwt({ token, account }) {
//       if (account) {
//         token.access_token = account.access_token
//       }
//       return token
//     },

//     async session({ token, session }) {
//       if (!session) { console.error('Session Not Found!') }
//       try {
//         const response = await axios.get<SecurityGroupResponse>('https://graph.microsoft.com/v1.0/me/memberOf', {
//           headers: {
//             Authorization: `Bearer ${token.access_token}`,
//           }
//         })
//         const results = response.data
//         session.groups = results.value.map(group => ({
//           id: group.id,
//           displayName: group.displayName
//         }))
//       } catch (error) {
//         // @ts-ignore
//         console.error(`Failed to get users' security groups.`, error.message)
//       }
//       return {
//         ...session,
//         token
//       }
//     },
//   }
// })
