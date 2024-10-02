import { ref } from 'vue';
import { CatalogType } from '@/types/shop';

export function useCatalog() {

  const catalogTypes = ref<CatalogType[]>([
    {
      name: 'Санкт-Петербург и ЛО',
      value: 'sl',
      descr: 'Самовывоз на весну 2024 г',
      location: 'Все горда ЛО в радиусе 400 км'
    },
    {
      name: 'Регионы',
      value: 'rg',
      descr: 'Рассылка на август 2024 г',
      location: 'Остальная часть России'
    }
  ]);

  return {
    catalogTypes
  };
}