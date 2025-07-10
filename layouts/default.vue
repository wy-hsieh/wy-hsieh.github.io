<template>
	<div class="layout_container" :class="{ 'is_loading': isLoading }">
		<loadingOverlay />

		<div class="layout_wrapper">
			<div class="layout_sidebar">
				<Sidebar />
			</div>

			<div class="layout_content">
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

	const loadingOverlayStore = useLoadingOverlayStore();
	const sidebarStore = useSidebarStore();


	onBeforeMount(() => useScrollToTop());

	const isLoading = computed(() => loadingOverlayStore.data.isLoading) 

	const sidebarActive = computed(() => sidebarStore.data.active);

</script>
