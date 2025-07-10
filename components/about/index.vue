<template>
	<div id="about" class="about_container">
		<p>{{ aboutStore.data.content }}</p>
	</div>
</template>

<script setup lang="ts">

	const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
	const aboutStore = useAboutStore();
	const sidebarStore = useSidebarStore();
	const projectsStore = useProjectsStore();


	onMounted(() => {
		// sidebar active
		ScrollTrigger.create({
			trigger: '#about',
			start: 'top center',
			end: 'bottom center',
			onEnter: (self) => {
				sidebarStore.setActive('about');
				projectsStore.setYear('');
			},
			onEnterBack: () => {
				sidebarStore.setActive('about');
				projectsStore.setYear('');
			},
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
	});
	
</script>
