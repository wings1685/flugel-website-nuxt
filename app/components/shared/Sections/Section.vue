<script setup lang="ts">
	import type { SectionAttributes } from "@/_global/types/components";

	const props = defineProps</* @vue-ignore */ SectionAttributes>();
</script>
<template>
	<section :class="[ 'section', props.class ]">
		<slot />
	</section>
</template>
<style lang="sass">
	@use "./Section.sass"
</style>
