<script setup lang="ts">
	import { buildSiteMeta } from "@/components/routes/_models/siteMeta";
	import { Archives, Experiments, Environment } from "./_parts";

	useHead(buildSiteMeta({ dir: '/archives' }));
</script>
<template>
	<main>
		<Environment />
		<Experiments />
		<Archives />
	</main>
</template>
