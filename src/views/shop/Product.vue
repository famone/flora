<template>
  <div class="py-8 pt-16">
    <ProductView :product="product" />
    <!-- <Popular /> -->
  </div>
</template>

<script setup lang="ts">
import { watch, ref, onMounted, onUnmounted } from 'vue';
// import Popular from '@/widgets/home/Popular.vue'
import ProductView from '@/widgets/shop/ProductView.vue';
import { useShopStore } from '@/stores/shop';
import { Product } from '@/types/shop';

const store = useShopStore();
const props = defineProps({
  id: {
    type: String,
    required: true
  }
});
const product = ref<Product | null>(null);

watch(() => props.id, () => {
  setProduct();
});

onMounted(() => {
  setProduct();
});
onUnmounted(() => {
  document.title = 'Северная Флора';
});

async function setProduct() {
  // product.value = null // при вызове надо привести к налл, чтобы отобразить skeleton
  product.value = null;
  product.value = await store.LOAD_PRODUCT(props.id);
  document.title = product.value?.name || 'Северная Флора';
}

</script>

<style scoped></style>