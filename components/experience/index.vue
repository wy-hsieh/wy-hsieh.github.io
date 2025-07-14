<template>
	<div id="experience" class="experience_container">
		<ClientOnly>
			<div
				class="experience_item"
				v-for="(experience, index) in reversedExperience"
				:key="`${experience.title} + ${index}`"
				>
				<div class="experience_detail">
					<div class="experience_compony_website">
						<h5>{{ experience.compony }}</h5>
						<span>(<a :href="experience.website" target="_blank">{{ experience.website }}</a>)</span>
					</div>
					<p class="experience_title_period">
						<span class="experience_title">{{ experience.title }}</span>
						|
						<span class="experience_period">{{ experience.period }}</span>
					</p>
					<p>{{ experience.description }}</p>
					<p>- 工作內容: {{ experience.responsibility }}</p>
					<p>- 使用技術: {{ experience.skill }}</p>
				</div>
	
				<hr v-if="index + 1 < experienceStoreStore.data.length">
			</div>
		</ClientOnly>
	</div>
</template>

<script setup lang="ts">

	const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
	const experienceStoreStore = useExperienceStore();
	const sidebarStore = useSidebarStore();
	const projectsStore = useProjectsStore();


	// reverse experience
	const reversedExperience = computed(() => {
		return experienceStoreStore.data.reverse();
	});

	onMounted(() => {
		// sidebar active
		ScrollTrigger.create({
			trigger: '#experience',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => {
				sidebarStore.setCurrentAnchor('experience');
				projectsStore.setYear('');
			},
			onEnterBack: () => {
				sidebarStore.setCurrentAnchor('experience');
				projectsStore.setYear('');
			},
		});
	});

</script>
