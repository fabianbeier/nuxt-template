<script lang="ts" setup>
import { useNow } from '@vueuse/core'

const time = useNow()
</script>

<template>
  <div class="p-5 text-green-500">
    <p>{{time}}</p>
    <h1 class="font-bold text-3xl py-2">Nuxt Template</h1>
    <ul class="list-disc list-inside">
      <li>with Directus</li>
      <li>with vueUse</li>
      <li>and Windicss</li>
    </ul>
  </div>
</template>

<style scoped></style>
