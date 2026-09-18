<script setup lang="ts">
	import type { SectionAttributes } from "@/_global/types/components";
	import "./Section.sass";

	const props = defineProps<SectionAttributes>();
</script>
<template>
	<section :class="[ 'section', props.class ]">
		<slot />
	</section>
</template>
