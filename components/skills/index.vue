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

	import { useSkillsStore } from '~/store/skills';
	const skillsStore = useSkillsStore();

</script>
