<script setup lang='ts'>
import { signIn } from '~/lib/auth-client'

useHead({ title: 'Home' })

// const { getSession } = useAuth()
// const session = await getSession()

// if (session) {
//   if (
// 	session.token.access_token &&
// 	session.groups
//   ) {
// 	localStorage.setItem(
// 	  'groups',
// 	  session.groups.map(group => group.id).toString()
//   	)
//   }
// }
</script>

<template>
  <p>click the button to login with microsoft</p>
  <button
    @click="async () => {
      await signIn.social({
        provider: 'microsoft',
        callbackURL: '/dashboard'
      })
    }"
  >
    login
  </button>
</template>
