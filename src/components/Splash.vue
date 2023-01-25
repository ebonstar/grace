<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/store";
import Block from "./Block.vue";

const store = useStore();
const { details } = storeToRefs(store);
</script>

<template>
  <Block> <img :src="details?.image" ) /> </Block>
</template>
