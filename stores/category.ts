import { defineStore } from 'pinia';
import { categories } from './test-data/category.data';
export const useCategoryStore = defineStore({
  id: 'CategoryStore',
  state: () => ({
    categoryList: categories,
    isReady: categories.length > 0 ? true : false,
  }),
  getters: {
    list: (state) => state.categoryList,
  },
  actions: {
    SET_LIST(list) {
      this.categoryList = list;
    },
  },
});
