<template>
	<ClientOnly>
		<div class="sidebar_logo">
			<img src="@/assets/images/logo/logo_yen_white.png" alt="yen_w" v-if="isDark">
			<img src="@/assets/images/logo/logo_yen_black.png" alt="yen_b" v-else>
		</div>
	</ClientOnly>

	<div class="sidebar_container">
		<div>
			<div class="sidebar_line" :class="{ 'active': sidebarActive === 'about' }">
				<span @click="useScrollToAnchor('about')">About</span>
			</div>
			<div class="sidebar_line" :class="{ 'active': sidebarActive === 'experience' }">
				<span @click="useScrollToAnchor('experience')">Experience</span>
			</div>
			<div class="sidebar_line" :class="{ 'active': sidebarActive === 'projects' }">
				<span @click="useScrollToAnchor('projects')">Projects</span>
			</div>
			<div class="sidebar_line" :class="{ 'active': sidebarActive === 'skills' }">
				<span @click="useScrollToAnchor('skills')">Skills</span>
			</div>
		</div>

		<div class="sidebar_icons">
			<a href="https://github.com/wy-hsieh" target="_blank">
				<img src="@/assets/images/icons/icon_github.png" alt="github">
			</a>
			<a href="https://www.linkedin.com/in/%E6%96%87%E7%A1%AF-%E8%AC%9D-1065771a1/" target="_blank">
				<img src="@/assets/images/icons/icon_linkedin.png" alt="linkedin">
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">

	import { useDark } from '@vueuse/core'
	defineProps(['sidebarActive']);


	const isDark = useDark();

</script>
