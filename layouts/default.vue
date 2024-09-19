<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import { Separator } from "@/components/ui/separator";
</script>

<template>
  <div class="h-full">
    <Navbar class="h-14" />
    <Separator class="w-full" />
    <NuxtPage class="h-[calc(100vh-57px)]" />
  </div>
</template>
