<template>
	<div class="sidebar_logo">
		<img src="@/assets/images/logo/logo_yen_white.svg" alt="yen_w" v-if="isDark">
		<img src="@/assets/images/logo/logo_yen_black.svg" alt="yen_b" v-else>
	</div>

	<div class="sidebar_container">
		<div class="sidebar_menu">
			<div class="sidebar_line" :class="{ 'active': currentAnchor === 'about' }">
				<span @click="useScrollToAnchor('about')">About</span>
			</div>
			<div class="sidebar_line" :class="{ 'active': currentAnchor === 'experience' }">
				<span @click="useScrollToAnchor('experience')">Experience</span>
			</div>
			<div class="sidebar_line" :class="{ 'active': currentAnchor === 'projects' }">
				<span @click="useScrollToAnchor('projects')">Projects</span>
			</div>
			<div class="sidebar_line" :class="{ 'active': currentAnchor === 'skills' }">
				<span @click="useScrollToAnchor('skills')">Skills</span>
			</div>
		</div>

	</div>
	
	<div class="sidebar_footer">
		<div class="sidebar_icons">
			<a :href="sidebarStore.data.githubUrl" target="_blank">
				<img src="@/assets/images/icons/icon_github.png" alt="github">
			</a>
			<a :href="sidebarStore.data.linkedInUrl" target="_blank">
				<img src="@/assets/images/icons/icon_linkedin.png" alt="linkedIn">
			</a>
		</div>

		<p class="sidebar_copyright">© 2025 Yen. Portfolio Website.</p>
	</div>
</template>

<script setup lang="ts">

	import { useDark } from '@vueuse/core';
	const isDark = useDark();
	const sidebarStore = useSidebarStore();


	const currentAnchor = computed(() => sidebarStore.data.currentAnchor);

</script>
