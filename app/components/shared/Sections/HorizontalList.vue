<script setup lang="ts">
	import type { UListAttributes } from "@/_global/types/components";
	import "./HorizontalList.sass";

	const props = defineProps<UListAttributes>();
</script>
<template>
	<ul v-bind="props" :class="[ 'horizontal_list', props.class ]">
		<slot />
	</ul>
</template>
