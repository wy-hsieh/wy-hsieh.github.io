<template>
	<div id="projects" class="projects_container">
		<transition name="fade_800">
			<p class="projects_bg_year" v-if="currentYear">
				{{ currentYear }}
			</p>
		</transition>
		<div
			:id="`projects_${years}`"
			class="projects_year_group"
			v-for="years in reversedYears"
			:key="years"
			>
			<div
				class="projects_item"
				v-for="(project, index) in reversedProjects[years]"
				:key="project.title"
				>
				<div class="projects_img">
					<img :src="`/images/projects/${years}/${project.image}`" :alt="project.image">
					<div class="mask"></div>
				</div>
				<div class="projects_content">
					<div class="project_text">
						<h5>{{ project.title }}</h5>
						<p>{{ project.overview }}</p>
						<p>網址: <a :href="project.website" target="_blank">{{ project.website }}</a></p>
						<p class="projects_skills">
							技術: 
							<span
								class="projects_skills_tag"
								v-for="skill in project.skills"
								:key="skill"
								>
								{{ skill }}
							</span>
						</p>
					</div>

					<hr v-if="index + 1 < projectsStore.data.projects[years].length">
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

	const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
	const projectsStore = useProjectsStore();
	const sidebarStore = useSidebarStore();


	const currentYear = computed(() => projectsStore.data.currentYear);

	const reversedYears = computed(() => Object.keys(projectsStore.data.projects).sort((a, b) => b - a));

	const reversedProjects = Object.fromEntries(Object.entries(useCloneDeep(projectsStore.data.projects)).map(item => {
		item[1].reverse();
		return item;
	}));

	onMounted(() => {
		// sidebar active
		ScrollTrigger.create({
			trigger: '#projects',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => sidebarStore.setCurrentAnchor('projects'),
			onEnterBack: () => sidebarStore.setCurrentAnchor('projects'),
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
	});

</script>
