import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUIStore = defineStore('ui', () => {
  const showTabBar = ref<boolean>(true);

  function setTabBarVisibility(state: boolean) {
    showTabBar.value = state;
  }

  return {
    showTabBar,
    setTabBarVisibility,
  };
});
