<script setup lang="ts">
	import "./Highlight.sass";

	type Props = {
		code: string;
		filename?: string;
	};
	const { code, filename} = defineProps<Props>();
</script>
<template>
	<div class="code_highlight">
		<p v-if="filename" class="filename monospace">{{ filename }}</p>
		<div class="shiki_wrapper" v-html="code" />
	</div>
</template>
