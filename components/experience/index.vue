<template>
	<div id="experience" class="experience_container">
		<div
			class="experience_item"
			v-for="(experience, index) in experienceStoreStore.data"
			:key="experience.title"
			>
			<div class="experience_detail">
				<div class="experience_compony_website">
					<h5>{{ experience.compony }}</h5>
					<span>(<a :href="experience.website" target="_blank">{{ experience.website }}</a>)</span>
				</div>
				<p class="experience_title_period">
					<span>{{ experience.title }}</span>
					|
					<span>{{ experience.period }}</span>
				</p>
				<p>{{ experience.description }}</p>
				<p>- 工作內容: {{ experience.responsibility }}</p>
				<p>- 使用技術: {{ experience.skill }}</p>
			</div>

			<hr v-if="index + 1 < experienceStoreStore.data.length">
		</div>
	</div>
</template>

<script setup lang="ts">

	import { useExperienceStore } from '~/store/experience';
	const experienceStoreStore = useExperienceStore();

</script>
