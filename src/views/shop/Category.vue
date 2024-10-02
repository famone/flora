<template>
  <div>
    <CategoryView
      v-if="currentCat && currentCat.child?.length"
      :items="currentCat.child"
      :title="title"
    />
    <SubcategoryView
      v-else
      :title="title"
      :items="store.subcat"
    />
  </div>
</template>

<script setup lang="ts">
import { watch, ref, onMounted } from 'vue';
import CategoryView from '@/widgets/shop/CategoryView.vue';
import SubcategoryView from '@/widgets/shop/SubcategoryView.vue';
import { useShopStore } from '@/stores/shop';
import { Category } from '@/types/shop';
// import SideCatNav from '@/features/nav/SideCatNav.vue'

const props = defineProps({
  cat: {
    type: String,
    required: true
  }
});

const store = useShopStore();
const currentCat = ref<Category | null>(null);

const title = ref<string>('');

const getCurrentCat = () => {
  if (!store.cats.length) return;

  const res = store.cats.find((i: Category) => i.slug === props.cat);
  if (res) {
    if (res.child?.length) {
      title.value = res.name;
      currentCat.value = res;
    } else {
      currentCat.value = null;
      title.value = res.name;
      store.LOAD_SUBCAT(props.cat);
    }
  }
};

watch(() => store.cats, () => {
  getCurrentCat();
});

watch(() => props.cat, () => {
  getCurrentCat();
});

onMounted(() => {
  getCurrentCat();
});

</script>