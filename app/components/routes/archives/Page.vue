<script setup lang="ts">
	import { buildTitle } from "@/_global/lib/utils";
	import { Archives, Experiments, Environment } from "./_parts";

	useHead(buildTitle({title: 'Archives'}));
</script>
<template>
	<main>
		<Environment />
		<Experiments />>
		<Archives />
	</main>
</template>
