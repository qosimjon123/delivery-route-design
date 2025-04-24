
<template>
  <div class="min-h-screen flex flex-col bg-slate-50">
    <AppHeader />
    <RouterView class="flex-1" />
    <BottomNavigation />
    <Toaster />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import BottomNavigation from '@/components/BottomNavigation.vue'
import { Toaster } from '@/components/ui/toaster'
</script>
