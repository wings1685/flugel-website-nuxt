<script setup lang="ts">
	import type { DivAttributes } from "@/_global/types/components";

	const props = defineProps<DivAttributes>();
</script>
<template>
	<div v-bind="props" :class="`box ${props.class}`">
		<slot />
	</div>
</template>
<style lang="sass">
	@use "./Box.sass"
</style>
