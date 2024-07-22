import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'UserStore',
  state: () => ({
    user: null,
  }),
  actions: {
    SET_USER(user: any) {
      this.user = user;
    },
  },
  persist: true,
});
