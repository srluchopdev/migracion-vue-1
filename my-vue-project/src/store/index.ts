import { defineStore } from 'pinia';
import type { User } from '../models/User';

export const useUserStore = defineStore('user', {
  state: (): { user: User | null } => ({
    user: null,
  }),
  actions: {
    setUser(user: User) {
      this.user = user;
    },
  },
});