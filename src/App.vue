<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div id="content">
    <RouterView />
  </div>
</template>

<style scoped>
#content {
  background: var(--parchment);
}
</style>
