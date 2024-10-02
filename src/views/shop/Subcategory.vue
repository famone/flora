<template>
  <div>
    <SubcategoryProductsView
      :title="currentCat?.title"
      :items="currentCat?.items"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useShopStore } from '@/stores/shop';
import { Product } from '@/types/shop';
import SubcategoryProductsView from '@/widgets/shop/SubcategoryProductsView.vue';

const store = useShopStore();
const props = defineProps({
  sub: {
    type: String,
    required: true
  }
});

interface Singlesub {
  title: string
  slug: string
  items: Product[]
}
const currentCat = ref<Singlesub | null>(null);



const getCurrentSub = () => {
  currentCat.value = null;
  store.LOAD_SUBCAT_SINGLE(props.sub).then(() => {
    currentCat.value = store.singleSubcat;
  });
};

watch(() => props.sub, () => {
  getCurrentSub();
});
onMounted(() => {
  getCurrentSub();
});

</script>

<style scoped></style>