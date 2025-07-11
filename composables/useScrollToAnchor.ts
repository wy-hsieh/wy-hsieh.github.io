// 滾動至指定錨點

const { $gsap: gsap } = useNuxtApp();
const sidebarStore = useSidebarStore();

const isMobile = computed(() => sidebarStore.data.isMobile);

export const useScrollToAnchor = (id: string) => {
  switch (id) {
    case 'about':
      gsap.to(window, {
        duration: 1,
        scrollTo: '#about',
        onComplete: () => { if (isMobile.value) sidebarStore.closeMobileSidebar() },
      });
      break;

    case 'experience':
      gsap.to(window, {
        duration: 1,
        scrollTo: '#experience',
        onComplete: () => { if (isMobile.value) sidebarStore.closeMobileSidebar() },
      });
      break;

    case 'projects':
      gsap.to(window, {
        duration: 1,
        scrollTo: '#projects',
        onComplete: () => { if (isMobile.value) sidebarStore.closeMobileSidebar() },
      });
      break;

    case 'skills':
      gsap.to(window, {
        duration: 1,
        scrollTo: '#skills',
        onComplete: () => { if (isMobile.value) sidebarStore.closeMobileSidebar() },
      });
      break;
  };
};
