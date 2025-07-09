<template>
	<div class="layout_container">
		<div class="layout_wrapper ">
			<div class="layout_sidebar">
				<Sidebar :sidebarActive="sidebarActive" />
			</div>

			<div class="layout_content">
				<slot />
			</div>
		</div>
		
		<p class="layout_footer">© 2025 Yen. Portfolio Website.</p>
	</div>
</template>

<script setup lang="ts">

	import { useProjectsStore } from '~/store/projects';
	import { useSkillsStore } from '~/store/skills';
	const projectsStore = useProjectsStore();
	const skillsStore = useSkillsStore();
	const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();


	onBeforeMount(() => useScrollToTop());

	const sidebarActive = ref('about');

	onMounted(() => {
		// sidebar active
		ScrollTrigger.create({
			trigger: '#about',
			start: 'top center',
			end: 'bottom center',
			onEnter: (self) => {
				sidebarActive.value = 'about';
				projectsStore.setYear('');
			},
			onEnterBack: () => {
				sidebarActive.value = 'about';
				projectsStore.setYear('');
			},
		});

		ScrollTrigger.create({
			trigger: '#experience',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => {
				sidebarActive.value = 'experience';
				projectsStore.setYear('');
			},
			onEnterBack: () => {
				sidebarActive.value = 'experience';
				projectsStore.setYear('');
			},
		});

		ScrollTrigger.create({
			trigger: '#projects',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => sidebarActive.value = 'projects',
			onEnterBack: () => sidebarActive.value = 'projects',
		});

		ScrollTrigger.create({
			trigger: '#skills',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => {
				sidebarActive.value = 'skills';
				projectsStore.setYear('');
			},
			onEnterBack: () => {
				sidebarActive.value = 'skills';
				projectsStore.setYear('');
			},
		});


		// background animation
		ScrollTrigger.create({
			trigger: '#projects_2020',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => projectsStore.setYear('2020'),
			onEnterBack: () => projectsStore.setYear('2020'),
		});

		ScrollTrigger.create({
			trigger: '#projects_2021',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => projectsStore.setYear('2021'),
			onEnterBack: () => projectsStore.setYear('2021'),
		});

		ScrollTrigger.create({
			trigger: '#projects_2022',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => projectsStore.setYear('2022'),
			onEnterBack: () => projectsStore.setYear('2022'),
		});

		ScrollTrigger.create({
			trigger: '#projects_2023',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => projectsStore.setYear('2023'),
			onEnterBack: () => projectsStore.setYear('2023'),
		});

		ScrollTrigger.create({
			trigger: '#projects_2024',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => projectsStore.setYear('2024'),
			onEnterBack: () => projectsStore.setYear('2024'),
		});

		ScrollTrigger.create({
			trigger: '#projects_2025',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => projectsStore.setYear('2025'),
			onEnterBack: () => projectsStore.setYear('2025'),
		});


		// snap
		ScrollTrigger.create({
			trigger: '#about',
			start: 'top top',
			end: 'bottom center',
			snap: {
				snapTo: 0,
				duration: 0.5,
				ease: 'power1.inOut',
			},
		});

		ScrollTrigger.create({
			trigger: '#experience',
			start: 'top top',
			end: 'bottom center',
			snap: {
				snapTo: 0,
				duration: 0.5,
				ease: 'power1.inOut',
			},
		});

		ScrollTrigger.create({
			trigger: '#projects_2020',
			start: 'top top',
			end: 'bottom center',
			snap: {
				snapTo: 0,
				duration: 0.5,
				ease: 'power1.inOut',
			},
		});

		ScrollTrigger.create({
			trigger: '#projects_2021',
			start: 'top top',
			end: '60% center',
			snap: {
				snapTo: 0,
				duration: 0.5,
				ease: 'power1.inOut',
			},
		});

		ScrollTrigger.create({
			trigger: '#projects_2022',
			start: 'top top',
			end: '70% center',
			snap: {
				snapTo: 0,
				duration: 0.5,
				ease: 'power1.inOut',
			},
		});

		ScrollTrigger.create({
			trigger: '#projects_2023',
			start: 'top top',
			end: '60% center',
			snap: {
				snapTo: 0,
				duration: 0.5,
				ease: 'power1.inOut',
			},
		});

		ScrollTrigger.create({
			trigger: '#projects_2024',
			start: 'top top',
			end: 'bottom center',
			snap: {
				snapTo: 0,
				duration: 0.5,
				ease: 'power1.inOut',
			},
		});

		ScrollTrigger.create({
			trigger: '#projects_2025',
			start: 'top top',
			end: 'bottom center',
			snap: {
				snapTo: 0,
				duration: 0.5,
				ease: 'power1.inOut',
			},
		});


		// skills progress
		skillsStore.data.forEach((item) => {
      ScrollTrigger.create({
        trigger: '#skills',
        start: 'top center',
        end: 'bottom center',
        onEnter: () => animateProgress(item.className, item.percentage),
        once: true,
      });
    });
	});

	
	function animateProgress(className: string, percentage: number) {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const progress = percentage / 100;
    const offset = circumference * (1 - progress);
    
    gsap.to(`.${className}`, {
      strokeDashoffset: offset,
      duration: 3,
      ease: 'power2.out',
    });
  };

</script>
