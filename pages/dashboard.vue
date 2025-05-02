<script setup lang='ts'>
import { useSession } from '~/lib/auth-client'
import axios from 'axios'

useHead({ title: 'Dashboard' })

const { data: session } = await useSession(useFetch)
const config = useRuntimeConfig().public

const access_token = config.ACCESS_TOKEN

// const getToken = async () => {
//   try {
//     const response = await axios.get(`${config.BASE_URL}/api/auth/token`)
//     access_token.value = response.data.token
//     console.log(response.data.token)
//   } catch (error) {
//     // @ts-ignore
//     console.error('Failed to get access token', error.message)
//   }
// }

// console.log(access_token.value)

// const getSecurityGroups = async () => {
//   try {
//     const response = await axios.get('https://graph.microsoft.com/v1.0/me/memberOf', {
//       headers: {
//         Authorization: `Bearer ${access_token}`,
//       }
//     })
//     const results = response.data
//     console.log(results)
//     // session.groups = results.value.map(group => ({
//     //   id: group.id,
//     //   displayName: group.displayName
//     // }))
//   } catch (error) {
//     // @ts-ignore
//     console.error(`Failed to get users' security groups.`, error.message)
//   }
// }

// onMounted(() => { getSecurityGroups() })

// try {
//   const response = await axios.get<SecurityGroupResponse>('https://graph.microsoft.com/v1.0/me/memberOf', {
//     headers: {
//       Authorization: `Bearer ${token.access_token}`,
//     }
//   })
//   const results = response.data
//   session.groups = results.value.map(group => ({
//     id: group.id,
//     displayName: group.displayName
//   }))
// } catch (error) {
//   // @ts-ignore
//   console.error(`Failed to get users' security groups.`, error.message)
// }
</script>

<template>
  <h1>Dashboard</h1>
  <p>Welcome back {{ session?.user.name }}.</p>
  <p>Your email is {{ session?.user.email }}.</p>
</template>
