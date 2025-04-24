
<template>
  <div class="bg-card border-t py-2 px-4 flex justify-around">
    <button class="flex flex-col items-center p-2">
      <Navigation :size="20" class="text-primary" />
      <span class="text-xs mt-1 text-primary">Маршрут</span>
    </button>
    <button class="flex flex-col items-center p-2">
      <Package :size="20" class="text-muted-foreground" />
      <span class="text-xs mt-1 text-muted-foreground">Заказы</span>
    </button>
    <button class="flex flex-col items-center p-2">
      <History :size="20" class="text-muted-foreground" />
      <span class="text-xs mt-1 text-muted-foreground">История</span>
    </button>
    <button class="flex flex-col items-center p-2">
      <User :size="20" class="text-muted-foreground" />
      <span class="text-xs mt-1 text-muted-foreground">Профиль</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Navigation, Package, History, User } from 'lucide-vue-next'
</script>
