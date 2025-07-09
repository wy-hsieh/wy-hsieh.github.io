import { defineStore } from 'pinia';

export const useBackgroundYearsStore = defineStore('backgroundYearsStore', () => {
  
  const data = ref({ year: '' });

  const setYear = (year: string) => data.value.year = year;


  return {
    data,
    setYear,
  };
});
