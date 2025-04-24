
<template>
  <div class="h-full flex flex-col items-center justify-center p-4 text-center">
    <div class="text-7xl font-bold text-primary mb-4">404</div>
    <h1 class="text-2xl font-bold mb-2">Страница не найдена</h1>
    <p class="text-muted-foreground mb-6">Страница, которую вы ищете, не существует или была перемещена.</p>
    <RouterLink to="/">
      <Button>На главную</Button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
</script>
