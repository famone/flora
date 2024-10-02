//src/composables/nuxtHoverEffect.js
import { computed } from 'vue';
import { useMouseInElement } from '@vueuse/core';

function lerp(start: any, end: any, factor: any) {
  return start * (1 - factor) + end * factor;
}

export function useNuxtHoverEffect(target: any) {
  const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target);
  // const theme = useThemeStore()
  const nuxtHoverEffect = computed(() => {
    //calculate center
    const centerX = elementWidth.value / 2;
    const centerY = elementHeight.value / 2;
    //calc vectors from center to mouse pos
    const vectorX = centerX - elementX.value;
    const vectorY = elementY.value - centerY;
    const vectorLength = Math.sqrt(vectorX ** 2 + vectorY ** 2);
    //calc angle
    const angleRad = Math.atan2(vectorX, vectorY);
    //convert to deg
    const deg = angleRad * (180 / Math.PI);
    // calculate opacity based on vectorLength
    const opacity = lerp(1, 0, vectorLength / 600);

    //colors
    const solid_color = 'rgba(57,181,74,1)';
    const highlight = `linear-gradient(${deg}deg, rgba(57, 181, 74,${opacity}), rgba(57, 181, 74,0) 20%)`;
    return isOutside.value ? highlight : solid_color;
  });

  return {
    target,
    elementX,
    elementY,
    isOutside,
    elementHeight,
    elementWidth,
    nuxtHoverEffect
  };
}