<script setup lang='ts'>
import { useSession } from '~/lib/auth-client'
const { data: session } = await useSession(useFetch)
</script>

<template>
  <h1>dashboard</h1>
  <p>welcome back {{  }}</p>
</template>
