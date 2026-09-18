<script setup lang="ts">
	import { buildTitle } from "@/_global/lib/utils";
	import { About, Blog, Terms } from "./_parts";

	useHead(buildTitle({title: 'Home'}));
</script>
<template>
	<main>
		<About />
		<Blog />
		<Terms />
	</main>
</template>
