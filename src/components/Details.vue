<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/store";
import Block from "./Block.vue";

const store = useStore();
const { currentItem } = storeToRefs(store);
</script>

<template>
  <Block>
    <h1 v-if="currentItem">{{ currentItem.name }}</h1>
  </Block>
</template>
