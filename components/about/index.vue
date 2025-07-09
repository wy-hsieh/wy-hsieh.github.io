<template>
	<div id="about" class="about_container">
		<p>{{ aboutStore.data.content }}</p>
	</div>
</template>

<script setup lang="ts">

	import { useAboutStore } from '~/store/about';
	const aboutStore = useAboutStore();
	
</script>
