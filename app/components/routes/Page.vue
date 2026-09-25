<script setup lang="ts">
	import { buildSiteMeta } from "@/components/routes/_models/siteMeta";
	import { About, Blog, Terms } from "./_parts";

	useHead(buildSiteMeta());
</script>
<template>
	<main>
		<About />
		<Blog />
		<Terms />
	</main>
</template>
