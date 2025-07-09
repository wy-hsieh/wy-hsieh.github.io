import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'; 

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  
  return {
    provide: {
      gsap,
      ScrollTrigger,
    },
  };
});
