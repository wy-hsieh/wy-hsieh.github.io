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
			onEnter: () => {
				sidebarStore.setCurrentAnchor('about');
				projectsStore.setYear('');
			},
			onEnterBack: () => {
				sidebarStore.setCurrentAnchor('about');
				projectsStore.setYear('');
			},
		});
	});
	
</script>
