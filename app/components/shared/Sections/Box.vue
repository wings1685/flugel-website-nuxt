<script setup lang="ts">
	import type { DivAttributes } from "@/_global/types/components";
	import "./Box.sass";

	const props = defineProps<DivAttributes>();
</script>
<template>
	<div v-bind="props" :class="`box ${props.class}`">
		<slot />
	</div>
</template>
