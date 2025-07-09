import { defineStore } from 'pinia';

export const useExperienceStore = defineStore('experienceStore', () => {
  const data  = ref([
    {
      compony: '安通國際事業股份有限公司',
      website: 'https://atona.com.tw/',
      title: '網頁工程師 (正職)',
      period: '2020/04 ~ 2025/01',
      description: '專注於公司內部活動報名網站的開發與維運，獨立負責前後端功能整合與部署，並與設計團隊緊密合作，提升整體使用者體驗與開發效率。',
      responsibility: '負責活動報名網站的前端切版、API 設計與串接、資料庫建置、後端開發、伺服器建置以及專案的日常維運。',
      skill: 'Vue.js、Nuxt.js、Node.js、Express.js、Firebase、Google Cloud Platform (GCP)',
    },
    {
      compony: '安通國際事業股份有限公司',
      website: 'https://atona.com.tw/',
      title: '網頁工程師 (自由接案)',
      period: '2025/02 ~ 2025/04',
      description: '離職後持續以接案合作形式參與專案開發，負責活動報名網站的功能開發與維運支援。',
      responsibility: '負責活動報名網站的前端切版、API 設計與串接、資料庫建置、伺服器建置以及專案的日常維護。',
      skill: 'Nuxt.js、Firebase、Google Cloud Platform (GCP)',
    },
  ]);


  return {
    data,
  };
});