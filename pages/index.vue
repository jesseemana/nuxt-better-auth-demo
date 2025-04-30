<script setup lang='ts'>
import { signIn } from '~/lib/auth-client'
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
