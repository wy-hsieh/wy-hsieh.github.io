<template>
	<div class="layout_container" :class="{ 'is_loading': isLoading }">
		<loadingOverlay />

		<div class="layout_wrapper">
			<ClientOnly>
				<transition name="fade_300">
					<button
						class="layout_toggle"
						:class="{ 'transition-transform': !isMobileSidebarActive }"
						@click="mobileSidebarToggle()"
						v-if="!isMobileSidebarActive"
						>
						<div class="layout_toggle_img">
							<img src="@/assets/images/logo/logo_yen_white.svg" alt="yen_w" v-if="isDark">
							<img src="@/assets/images/logo/logo_yen_black.svg" alt="yen_b" v-else>
						</div>
					</button>
				</transition>
					
				<transition name="slide_right_1000">
					<div class="layout_sidebar" ref="target" v-if="isMobileSidebarActive">
						<Sidebar />
					</div>
				</transition>	
			</ClientOnly>

			<div class="layout_content z-10">
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	
	import { onClickOutside, useWindowSize, useDark } from '@vueuse/core';
	const { width: screenWidth } = useWindowSize();
	const isDark = useDark();
	const loadingOverlayStore = useLoadingOverlayStore();
	const sidebarStore = useSidebarStore();


	onBeforeMount(() => useScrollToTop());

	const isLoading = computed(() => loadingOverlayStore.data.isLoading);
	
	const isMobileSidebarActive = computed(() => sidebarStore.data.isMobileSidebarActive);
	const mobileSidebarToggle = () => {
		isMobileSidebarActive.value ? sidebarStore.closeMobileSidebar() : sidebarStore.openMobileSidebar();
	};

	const target = useTemplateRef<HTMLElement>('target');
	let stopOutside: (() => void) | null = null;

	watch(screenWidth, (newVal: number) => {
		if (newVal < 768) {
			sidebarStore.setMobileTrue();
			sidebarStore.closeMobileSidebar();
			if (!stopOutside) stopOutside = onClickOutside(target, () => { // 執行 onClickOutside 並將移除監聽的函式存至 stopOutside
				sidebarStore.closeMobileSidebar();
			});
		} else {
			sidebarStore.setMobileFalse();
			sidebarStore.openMobileSidebar();
			stopOutside?.(); // 執行移除 onClickOutside 的監聽
			stopOutside = null;
		};
	}, { immediate: true });
	
</script>
