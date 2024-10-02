import { ref } from 'vue';
import axios from 'axios';

export function useSearch() {

  interface CatSearchItem {
    id: number
    image: string
    name: string
    slug: string
    url: string
  }
  interface ProductSearchItem {
    id: number
    image: string
    name: string
    nameR: string
    price: string
    slug: string
  }
  interface SearchResults {
    data: {
      cats?: CatSearchItem[]
      products?: ProductSearchItem[]
    }
  }

  const searchInput = ref<string>('');
  const searchResults = ref<ProductSearchItem[]>([]);
  const searchHistory = ref<string[]>([]);

  const startSearch = () => {
    if (searchInput.value.length > 2) {
      axios.get(`https://sflora.ru/wp-json/sf/v1/get/search/${searchInput.value}`)
        .then(({ data }: SearchResults) => {
          if (data.products) {
            searchResults.value = data.products?.slice(0, 5);
          }
        })
        .catch(() => {
          searchResults.value = [];
          return false;
        });
    }
  };

  const redirectOnSearch = () => {
    searchHistory.value.unshift(searchInput.value);
    if (searchHistory.value.length > 3) {
      searchHistory.value.pop();
    }
  };

  const removeFromHistory = (i: number) => {
    searchHistory.value.splice(i, 1);
  };

  return {
    searchInput,
    startSearch,
    searchResults,
    searchHistory,
    redirectOnSearch,
    removeFromHistory
  };
}