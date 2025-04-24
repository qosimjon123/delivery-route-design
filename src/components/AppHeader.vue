
<template>
  <header class="bg-white border-b px-4 py-3 flex justify-between items-center">
    <div class="flex items-center">
      <Menu :size="20" class="text-gray-700 mr-3" />
      <h1 class="font-medium">Доставка</h1>
    </div>
    <div class="flex items-center gap-3">
      <div class="flex items-center">
        <div class="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
        <span class="text-sm">В сети</span>
      </div>
      <Avatar class="h-8 w-8">
        <AvatarImage src="/placeholder.svg" />
        <AvatarFallback>КС</AvatarFallback>
      </Avatar>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
</script>
