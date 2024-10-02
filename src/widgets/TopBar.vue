<template>
  <div
    :class="topbar"
    class="bg-[url('https://sflora.ru/dist/img/submit2.a80d1d3f.jpg')]"
  >
    <div class="container mx-auto flex justify-between relative">
      <CatalogSelect
        :catalog-selected="catalogSelected"
        @click="catalogModalVisible = !catalogModalVisible"
      />
      <transition name="fade-slide">
        <CatalogSelectModal
          v-if="catalogModalVisible"
          :catalog-selected="catalogSelected"
          @changeCatalog="changeCatalog"
          @closeModal="closeModal"
        />
      </transition>
      <ul class="flex justify-end items-center gap-6">
        <li>+7 (921) 332-13-80</li>
        <li
          v-for="(item, i) in nav"
          :key="i"
        >
          <router-link to="/">
            {{ item.txt }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, watch } from 'vue';
import CatalogSelect from '@/features/nav/CatalogSelect.vue';
import CatalogSelectModal from '@/features/nav/CatalogSelectModal.vue';
import { useNavBar } from './model/useNavBar';
import { useShopStore } from '@/stores/shop';
import { CatalogSelectedType } from '@/types/shop';

const emit = defineEmits(['closeCatalogIfVisible']);
const { nav } = useNavBar();
const topbar = 'py-2 text-white bg-cover bg-center bg-no-repeat relative topbar';

const store = useShopStore();
const catalogModalVisible = ref<boolean>(false);
const catalogSelected = ref<CatalogSelectedType>(null);

onMounted(() => {
  catalogSelected.value = store.catalogSelected;
  if (!store.catalogSelected) {
    catalogModalVisible.value = true;
  }
});
watch(() => catalogModalVisible.value, () => {
  emit('closeCatalogIfVisible');
});

const changeCatalog = async (value: CatalogSelectedType) => {
  catalogSelected.value = value;
  store.CHANGE_CATALOG(value);
  await nextTick();
  catalogModalVisible.value = false;
};
function closeModal() {
  if (!catalogSelected.value) return;
  catalogModalVisible.value = false;
}

</script>

<style>
.topbar::before {
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background: rgba(0, 0, 0, .1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(10px);
}
</style>