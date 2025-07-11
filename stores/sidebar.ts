import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebarStore', () => {
  
  const data = ref({
    githubUrl: 'https://github.com/wy-hsieh',
    linkedInUrl: 'https://www.linkedin.com/in/%E6%96%87%E7%A1%AF-%E8%AC%9D-1065771a1/',
    currentAnchor: 'about',
    isMobileSidebarActive: false,
    isMobile: false,
  });

  const setCurrentAnchor = (id: string) => data.value.currentAnchor = id;

  const openMobileSidebar = () => data.value.isMobileSidebarActive = true;
  const closeMobileSidebar = () => data.value.isMobileSidebarActive = false;
  
  const setMobileTrue = () => data.value.isMobile = true;
  const setMobileFalse = () => data.value.isMobile = false;


  return {
    data,
    setCurrentAnchor,
    openMobileSidebar,
    closeMobileSidebar,
    setMobileTrue,
    setMobileFalse,
  };
});
