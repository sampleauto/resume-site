<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";
const mode = useColorMode();

function darkMode() {
  if (mode.value === "light") mode.value = "dark";
  else mode.value = "light";
}
</script>

<template>
  <div>
    <Button variant="outline" @click="darkMode" class="size-8">
      <Icon
        icon="radix-icons:sun"
        class="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Icon
        icon="radix-icons:moon"
        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
    </Button>
  </div>
</template>
