
<template>
  <div class="flex flex-col items-center justify-center h-screen p-4 text-center">
    <h1 class="text-4xl font-bold">404</h1>
    <p class="mt-2 text-lg text-muted-foreground">Страница не найдена</p>
    <RouterLink to="/" class="mt-6 inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
      Вернуться на главную
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
