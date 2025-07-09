import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projectsStore', () => {
  const data = ref({
    projects: {
      2020: [
        {
          image: '2020_hotaimotor-campus.jpg',
          title: '和泰汽車 - 校園熱血大使 活動報名網站',
          overview: `和泰汽車主辦的校園推廣與實習計畫，網站提供活動資訊與線上報名功能。
            負責項目包含前端介面開發、API 設計與串接、報名系統開發、雲端伺服器建置以及資料庫建置。`,
          website: 'https://www.hotaimotor-campus.com.tw',
          skills: [ 'JavaScript', 'PHP', 'MySQL', 'GCP' ],
        },
        {
          image: '2020_aohuastory.jpg',
          title: '「澳花開麥啦．看見心故鄉」創生計劃 活動報名網站',
          overview: `以宜蘭南澳鄉澳花村為主題的全國校園影像徵件活動，網站提供活動資訊與線上報名功能。
            負責項目包含前端介面開發、API 設計與串接、報名系統開發、雲端伺服器建置以及資料庫建置。`,
          website: 'https://aohuastory.com.tw',
          skills: [ 'JavaScript', 'PHP', 'MySQL', 'GCP' ],
        }
      ],
      2021: [
        {
          image: '2021_atcc19th.jpg',
          title: '第 19 屆 ATCC 活動報名網站 ',
          overview: `第 19 屆 ATCC 全國大專院校商業個案競賽報名網站，網站提供會員功能以及線上報名功能。
            負責項目包含前端介面開發、API 設計與串接、會員系統開發、報名系統開發、雲端伺服器建置以及資料庫建置。`,
          website: 'https://signup.atcc.co',
          skills: [ 'JavaScript', 'Node.js', 'MongoDB', 'GCP', 'Cloudflare' ],
        },
        {
          image: '2021_udreamer6th.jpg',
          title: '第 6 屆 台積電青年築夢計畫 活動報名網站',
          overview: `由台積電文教基金會主辦的第 6 屆台積電青年築夢計畫，網站提供活動資訊與線上報名功能。
            負責項目包含前端介面開發、API 設計與串接以及雲端伺服器建置。`,
          website: 'https://2021.tsmc-udreamer.org',
          skills: [ 'JavaScript', 'Express.js', 'GCP', 'Cloudflare' ],
        },
        {
          image: '2021_chcgroup.jpg',
          title: '嘉新企業團 官網',
          overview: `嘉新企業團舊有網站以及各事業單位資訊整合並重新建置。
            負責項目為網站建置。`,
          website: 'https://www.chcgroup.com.tw',
          skills: [ 'Wordpress' ],
        },
      ],
      2022: [
        {
          image: '2022_bonder_atcc20th.jpg',
          title: 'bonder (第 20 屆 ATCC 報名)',
          overview: `一站式的活動管理平台，網站提供會員功能、團隊組隊功能、創建活動功能以及線上報名功能。
            負責項目包含前端介面開發、API 設計與串接以及雲端伺服器建置。`,
          website: 'https://www.bonder.com.tw',
          skills: [ 'Vue.js', 'Express.js', 'GCP', 'Cloudflare' ],
        },
        {
          image: '2022_tsmcday.jpg',
          title: 'TSMC day 活動報名網站',
          overview: `台積電預聘計畫交流活動，網站提供活動資訊與線上報名功能。
            負責項目包含前端介面開發、API 設計與串接、報名系統開發、雲端伺服器建置以及資料庫建置。`,
          website: 'https://tsmcday.tw',
          skills: [ 'Vue.js', 'Express.js', 'Firebase', 'GCP', 'Cloudflare' ],
        },
        {
          image: '2022_udreamer7th.jpg',
          title: '第 7 屆 台積電青年築夢計畫 活動報名網站',
          overview: `由台積電文教基金會主辦的第 7 屆台積電青年築夢計畫，網站提供活動資訊與線上報名功能。
            負責項目包含前端介面開發、API 設計與串接、報名系統開發、雲端伺服器建置以及資料庫建置。`,
          website: 'https://2022.tsmc-udreamer.org',
          skills: [ 'Vue.js', 'Express.js', 'Firebase', 'GCP', 'Cloudflare' ],
        },
        {
          image: '2022_actdreamer2nd.jpg',
          title: '第 2 屆 ACT 夢想家 - ESG 影響力計劃 活動官網',
          overview: `以大學生參與企業實際議題、發揮創意並實地執行的提案活動，網站提供活動資訊與線上報名功能。
            負責項目為網站改版。`,
          website: 'https://act-dreamer.com.tw',
          skills: [ 'Wordpress', 'GCP', 'Cloudflare' ],
        },
      ],
      2023: [
        {
          image: '2023_yllnpo.jpg',
          title: 'ATCC x 林堉璘宏泰教育基金會 │ NPO 永續創新個案大賽 活動官網',
          overview: `ATCC 與林堉璘宏泰教育基金會聯合主辦的創新個案競賽，網站提供活動資訊與線上報名功能。
            負責項目包含網站建置以及伺服器建置。`,
          website: 'https://yllnpo.atcc.co',
          skills: [ 'Wordpress', 'GCP', 'Cloudflare' ],
        },
        {
          image: '2023_udreamer8th.jpg',
          title: '第 8 屆 台積電青年築夢計畫 活動報名網站',
          overview: `由台積電文教基金會主辦的第 8 屆台積電青年築夢計畫，網站提供活動資訊與線上報名功能。
            負責項目包含前端介面開發、API 設計與串接、報名系統開發、雲端伺服器建置以及資料庫建置。`,
          website: 'https://2023.tsmc-udreamer.org',
          skills: [ 'Vue.js', 'Express.js', 'Firebase', 'GCP', 'Cloudflare' ],
        },
        {
          image: '2023_atcc21st.jpg',
          title: '第 21 屆 ATCC 活動報名網站',
          overview: `第 21 屆 ATCC 全國大專院校商業個案競賽報名網站，網站提供會員功能、團隊組隊功能以及線上報名功能。
            負責項目包含前端介面開發、API 設計與串接、會員系統開發、組隊系統開發、報名系統開發、雲端伺服器建置以及資料庫建置。`,
          website: 'https://login.atcc.co',
          skills: [ 'Nuxt.js', 'Firebase', 'GCP', 'Cloudflare' ],
        },
      ],
      2024: [
        {
          image: '2024_atcc.jpg',
          title: 'ATCC 官網',
          overview: `ATCC 全國大專院校商業個案競賽官方網站全新改版。
            負責項目包含網站建置、伺服器建置。`,
          website: 'https://atcc.co',
          skills: [ 'Wordpress', 'GCP', 'Cloudflare' ],
        },
        {
          image: '2024_udreamer9th.jpg',
          title: '第 9 屆 台積電青年築夢計畫 活動報名網站',
          overview: `由台積電文教基金會主辦的第 9 屆台積電青年築夢計畫，網站提供活動資訊與線上報名功能。
            負責項目包含前端介面開發、API 設計與串接、報名系統開發、雲端伺服器建置以及資料庫建置。`,
          website: 'https://tsmc-udreamer.org',
          skills: [ 'Nuxt.js', 'Firebase', 'GCP', 'Cloudflare' ],
        },
      ],
      2025: [
        {
          image: '2025_bonder.jpg',
          title: 'bonder (第 22 屆 ATCC 報名)',
          overview: `一站式的活動管理平台，為 2022 年後全新改版，網站提供會員功能、團隊組隊功能、創建活動功能以及線上報名功能。
            負責項目包含前端介面開發、API 設計與串接、會員系統開發、組隊系統開發、後台系統開發、報名系統開發、雲端伺服器建置以及資料庫建置。`,
          website: 'https://bonder.com.tw',
          skills: [ 'Nuxt.js', 'Firebase', 'GCP', 'Cloudflare' ],
        },
      ],
    },
    currentYear: '',
  });

  const setYear = (year: string) => data.value.currentYear = year;


  return {
    data,
    setYear
  };
});
