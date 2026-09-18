<script setup lang="ts">
	import type { ParagraphAttributes, DivAttributes } from "@/_global/types/components";
	import "./Paragraph.sass";

	type Props = (ParagraphAttributes & {
		as?: 'p';
	}) | (DivAttributes & {
		as: 'div';
	});

	const props = defineProps<Props>();
	const as = props.as ?? 'a';
</script>
<template>
	<a v-if="as === 'a'" v-bind="props" :class="[ 'paragraph', props.class ]">
		<slot />
	</a>
	<div v-else v-bind="props" :class="[ 'paragraph', props.class ]">
		<slot />
	</div>
</template>
