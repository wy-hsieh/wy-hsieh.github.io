<template>
	<div id="skills" class="skills_container">
		<div class="skills_wrapper">

      <div
        class="skills_item"
        v-for="skill in skillsStore.data"
        :key="skill.name"
        >
				<svg class="skills_svg" viewBox="0 0 100 100">
					<circle class="skills_bottom_circle" cx="50" cy="50" r="45" />
					<circle
            class="skills_top_circle"
            :class="[ `${skill.className}`, `stroke-[#${skill.color}]` ]"
            cx="50"
            cy="50"
            r="45" />
				</svg>
				<span class="skills_label">{{ skill.name }}</span>
			</div>

		</div>
	</div>
</template>

<script setup lang="ts">

  const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
	const skillsStore = useSkillsStore();
  const sidebarStore = useSidebarStore();
  const projectsStore = useProjectsStore();


	onMounted(() => {
    ScrollTrigger.create({
			trigger: '#skills',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => {
				sidebarStore.setCurrentAnchor('skills');
				projectsStore.setYear('');
			},
			onEnterBack: () => {
				sidebarStore.setCurrentAnchor('skills');
				projectsStore.setYear('');
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

	const animateProgress = (className: string, percentage: number) => {
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
