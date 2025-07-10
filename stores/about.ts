import { defineStore } from 'pinia';

export const useAboutStore = defineStore('aboutStore', () => {
  
  const data = ref({
    content: '擁有五年的全端開發經驗，擅長使用 Vue.js、Nuxt.js、Express.js 等前後端框架，熟悉 Node.js 與 RESTful API 等後端開發技術，並具備 GCP 與 AWS 等雲端服務的操作經驗，熟悉網站部署流程，能獨立完成前後端整合與系統建置，亦具與後端工程師協同完成團隊專案經驗，也曾參與過多項網站架構規劃與 UI/UX 設計討論，重視使用者需求與操作流程，致力於打造兼具功能性與良好體驗的數位產品。',
  });


  return {
    data,
  };
});
