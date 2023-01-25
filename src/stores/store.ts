import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import type { LookupItem } from "@/static/data";

export const useStore = defineStore("store", () => {
  const currentItem: Ref<LookupItem | undefined> = ref(undefined);

  function setCurrentItem(item: LookupItem) {
    currentItem.value = item;
  }

  return { currentItem, setCurrentItem };
});
