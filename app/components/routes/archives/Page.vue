<script setup lang="ts">
	import { buildTitle } from "@/_global/lib/utils";
	import { Archives, Environment } from "./_parts";

	useHead(buildTitle({title: 'Archives'}));
</script>
<template>
	<main>
		<Environment />
		<Archives />
	</main>
</template>
