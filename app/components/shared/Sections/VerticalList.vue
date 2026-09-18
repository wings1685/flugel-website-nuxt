<script setup lang="ts">
	import type { UListAttributes } from "@/_global/types/components";
	import "./VerticalList.sass";

	const props = defineProps<UListAttributes>();
</script>
<template>
	<ul v-bind="props" :class="[ 'vertical_list', props.class ]">
		<slot />
	</ul>
</template>
