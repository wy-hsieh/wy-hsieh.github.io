// 滾動至指定錨點

const { $gsap: gsap } = useNuxtApp();

export const useScrollToAnchor = (id: string) => {
  switch (id) {
    case 'about':
      gsap.to(window, {
        duration: 1,
        scrollTo: '#about',
      });
      break;

    case 'experience':
      gsap.to(window, {
        duration: 1,
        scrollTo: '#experience',
      });
      break;

    case 'projects':
      gsap.to(window, {
        duration: 1,
        scrollTo: '#projects',
      });
      break;

    case 'skills':
      gsap.to(window, {
        duration: 1,
        scrollTo: '#skills',
      });
      break;
  };
};
