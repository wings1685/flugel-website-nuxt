<script setup lang="ts">
	import { useStore } from "@/_global/piquo";
	import { Glass } from "./";

	const { navOpened, setNavOpened } = useStore('navOpened');
	const route = useRoute();

	const handleClick = (e?: Event) => {
		if (e) {
			e.preventDefault();
			setNavOpened(!navOpened());
		} else {
			setNavOpened(false);
		}
	};
	const thisPage = computed(() => route.path.replace(/\//g, '') || 'top');
</script>
<template>
	<header>
		<input type="checkbox" :checked="navOpened()" />
		<Glass as="a" mini isDark href="/" icon="home" @click="() => handleClick()" :class="{ active: thisPage === 'top' }">
			<p>
				<span>Home</span>
			</p>
		</Glass>
		<Glass as="a" mini isDark href="/archives/" icon="folder" @click="() => handleClick()" :class="{ active: thisPage === 'archives' }">
			<p>
				<span>Archives</span>
			</p>
		</Glass>
		<Glass as="a" mini isDark href="/types/" icon="code" @click="() => handleClick()" :class="{ active: thisPage === 'types' }">
			<p>
				<span>Types</span>
			</p>
		</Glass>
		<Glass as="div" mini isDark id="btn_nav" @click="handleClick">
			<span></span>
		</Glass>
	</header>
</template>
<style lang="sass">
	@use "./Header.sass"
</style>
