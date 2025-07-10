import { defineStore } from 'pinia';

export const useLoadingOverlayStore = defineStore('loadingOverlayStore', () => {
  
  const data = ref({ isLoading: true });

  const openLoadingOverlay = () => data.value.isLoading = true;
  const closeLoadingOverlay = () => data.value.isLoading = false;


  return {
    data,
    openLoadingOverlay,
    closeLoadingOverlay,
  };
});
