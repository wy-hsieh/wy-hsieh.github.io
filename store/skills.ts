import { defineStore } from 'pinia';

export const useSkillsStore = defineStore('skillsStore', () => {
  const data = ref([
    {
      name: 'HTML',
      className: 'html',
      percentage: 100,
      color: '3178C6',
    },
    {
      name: 'CSS',
      className: 'css',
      percentage: 100,
      color: '3178C6',
    },
    {
      name: 'JavaScript',
      className: 'javascript',
      percentage: 100,
      color: '3178C6',
    },
    {
      name: 'TypeScript',
      className: 'typescript',
      percentage: 100,
      color: '3178C6',
    },
    {
      name: 'jQuery',
      className: 'jquery',
      percentage: 100,
      color: '3178C6',
    },
    {
      name: 'Vue.js',
      className: 'vue',
      percentage: 100,
      color: '42B883',
    },
    {
      name: 'Nuxt.js',
      className: 'nuxt',
      percentage: 100,
      color: '42B883',
    },
    {
      name: 'React.js',
      className: 'react',
      percentage: 50,
      color: '42B883',
    },
    {
      name: 'React Native',
      className: 'nuxt_native',
      percentage: 50,
      color: '42B883',
    },
    {
      name: 'Node.js',
      className: 'node',
      percentage: 100,
      color: '8892BF',
    },
    {
      name: 'Express.js',
      cclassName: 'express',
      percentage: 100,
      color: '8892BF',
    },
    {
      name: 'PHP',
      className: 'php',
      percentage: 100,
      color: '8892BF',
    },
    {
      name: 'Python',
      className: 'python',
      percentage: 50,
      color: '8892BF',
    },
    {
      name: 'Figma',
      className: 'figma',
      percentage: 100,
      color: 'E44D26',
    },
    {
      name: 'Illustrator',
      className: 'illustrator',
      percentage: 50,
      color: 'E44D26',
    },
    {
      name: 'Photoshop',
      className: 'photoshop',
      percentage: 50,
      color: 'E44D26',
    },
    {
      name: 'Firebase',
      className: 'firebase',
      percentage: 100,
      color: 'F4B400',
    },
    {
      name: 'GCP',
      className: 'gcp',
      percentage: 100,
      color: 'F4B400',
    },
    {
      name: 'AWS',
      className: 'aws',
      percentage: 50,
      color: 'F4B400',
    },
  ]);


  return {
    data,
  };
});
