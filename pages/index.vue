<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <h1>Home page!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://dmscreen.sampleauto.net" target="_blank">Test</a>
  </div>
</template>
