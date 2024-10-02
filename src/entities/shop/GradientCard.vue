<template>
  <div
    ref="target"
    class="box relative"
    :style="{ '--x': `${elementX}px`, '--y': `${elementY}px` }"
  >
    <div class="content p-4">
      <component
        :is="getIcon(item.name)"
        class="mb-4 h-12"
      />
      <p class="text-lg font-bold items-center">
        {{ item.name }}
      </p>
      <p
        class="title text-neutral-400"
        v-html="item.description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMouseInElement } from '@vueuse/core';
import useIcons from '@/features/nav/model/useIcons';
import { Category } from '@/types/shop';

const { getIcon } = useIcons();
const target = ref(null);
const { elementX, elementY } = useMouseInElement(target);

type Props ={
  item: Category
}

const { item } = defineProps<Props>();
</script>

<style scoped>
 .title {
    font-size: 14px;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
}
/*  */

.box {
  padding: 2px;
  background-color: #d1d5db;
  border-radius: 15px;
  overflow: hidden;
  isolation: isolate;
}

.box {
  border-color: transparent;
}
.box::before {
  content: '';
  width: 100%;
  aspect-ratio: 1/1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  background: radial-gradient(
    250px circle at var(--x) var(--y),
    #008027 0%,
    #008027 0%,
    rgba(255, 0, 0, 0) 100%
  );
}

/* .box::after {
  content: '';
  width: 100%;
  aspect-ratio: 1/1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  background: radial-gradient(
    400px circle at var(--x) var(--y),
    rgba(237, 237, 237, 1) 0%,
    rgb(251, 255, 40) 0%,
    rgba(236, 32, 255) 59%,
    rgba(255, 0, 0, 0) 100%
  );
} */

.box:hover::after {
  opacity: 1;
}

.box .content {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 13px;
  border: 0px solid #fff;
  transition: border 0.2s ease-in-out;
  z-index: 1;
}
</style>