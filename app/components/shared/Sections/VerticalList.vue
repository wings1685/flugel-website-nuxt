<script setup lang="ts">
	import type { UListAttributes } from "@/_global/types/components";

	const props = defineProps<UListAttributes>();
</script>
<template>
	<ul v-bind="props" :class="[ 'vertical_list', props.class ]">
		<slot />
	</ul>
</template>
<style lang="sass">
	@use "./VerticalList.sass"
</style>
