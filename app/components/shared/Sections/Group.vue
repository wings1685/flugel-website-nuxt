<script setup lang="ts">
	import type { Directions, DivAttributes, Sizes } from "@/_global/types/components"
	import "./Group.sass";

	type Props = DivAttributes & {
		direction?: Directions;
		marginSize?: Extract<Sizes, 'small' | 'medium' | 'large' | 'none'>;
	};
	const { direction = 'center', marginSize = 'medium', ...rest } = defineProps<Props>();
</script>
<template>
	<div v-bind="rest" :class="[ `group direction_${direction} margin_size_${marginSize}`, rest.class ]">
		<slot />
	</div>
</template>
