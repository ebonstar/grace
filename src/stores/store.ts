import { computed, ref, type ComputedRef, type Ref } from "vue";
import { defineStore } from "pinia";
import type { LookupItem } from "@/static/data";

type MonsterDetails = {
  image: any;
};

export const useStore = defineStore("store", () => {
  const currentItem: Ref<LookupItem | undefined> = ref(undefined);

  const details: ComputedRef<MonsterDetails | undefined> = computed(() => {
    if (currentItem.value === undefined) return;

    return {
      image: require(".assets/icons/monsters/Unidentified.png"),
    };
  });

  function setCurrentItem(item: LookupItem) {
    currentItem.value = item;
  }

  return { currentItem, details, setCurrentItem };
});
