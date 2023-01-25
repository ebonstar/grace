<script setup lang="ts">
import SimpleTypeahead from "vue3-simple-typeahead";
import LOOKUP_LIST, { type LookupItem } from "@/static/data";
import { useStore } from "@/stores/store";

const store = useStore();
const { setCurrentItem } = store;

function newSearch(item: LookupItem) {
  setCurrentItem(item);
}
</script>

<template>
  <div id="search-wrapper">
    <SimpleTypeahead
      id="search"
      placeholder="Search for a monster, material or item"
      :items="LOOKUP_LIST"
      :minInputLength="2"
      :itemProjection="(item: LookupItem) => item.name"
      @selectItem="newSearch"
      selectOnTab
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
  background: var(--light);
  border: 2px solid var(--medium);
  outline: none;
}

:deep(input#search:focus, input#search:active, input#search:hover) {
  border: 2px solid var(--shadow);
}

:deep(div.simple-typeahead-list) {
  width: calc(100% - 8rem);
  position: absolute;
  box-sizing: border-box;
  background: var(--light);
  border: 2px solid var(--medium);
  border-top: none;
  max-height: 400px;
  overflow-y: auto;
  cursor: pointer;
  z-index: 9;
}

:deep(div.simple-typeahead-list-item) {
  padding: 0.4rem 1rem;
}

:deep(div.simple-typeahead-list-item-active) {
  background: var(--bone);
}
</style>
