import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebarStore', () => {
  
  const data = ref({ active: 'about' });

  const setActive = (id: string) => data.value.active = id;


  return {
    data,
    setActive,
  };
});
