import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin, MorphSVGPlugin } from 'gsap/all';

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MorphSVGPlugin);


  return {
    provide: {
      gsap,
      ScrollTrigger,
    },
  };
});
