<template>
  <div id="app">
    <NavBar />
    <router-view v-slot="{ Component, route }">
      <transition name="slide-top" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/widgets/NavBar.vue'
import Footer from '@/widgets/Footer.vue'
import { useShopStore } from '@/stores/shop'
import { useContentStore } from '@/stores/content'

const store = useShopStore()
const content = useContentStore()
store.LOAD_CATS()

// в очередь
content.LOAD_NEWS()
content.LOAD_VK()
store.LOAD_POPULAR()

</script>

<style scoped></style>