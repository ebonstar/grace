<script setup lang="ts">
import SimpleTypeahead from "vue3-simple-typeahead";
import LOOKUP_LIST, { type LookupItem } from "@/static/data";
</script>

<template>
  <div id="search-wrapper">
    <SimpleTypeahead
      id="search"
      placeholder="Search for a monster, material or item"
      :items="LOOKUP_LIST"
      :minInputLength="2"
      :itemProjection="(item: LookupItem) => item.name"
      selectOnTab="true"
    >
    </SimpleTypeahead>
  </div>
</template>

<style scoped>
div#search-wrapper {
  padding: 2rem;
}
:deep(input#search) {
  box-sizing: border-box;
  width: 100%;
  font-size: 1.2rem;
  padding: 0.4rem 1rem;
}
</style>
