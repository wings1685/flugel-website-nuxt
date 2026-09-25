<script setup lang="ts">
	import { Icon } from "../Utils/index.ts";
	import type { IconProps } from "../Utils/Icon.vue";
	import type { HAttributes } from "@/_global/types/components";

	type Props = HAttributes & {
		icon: IconProps['type'];
	};
	const props = defineProps<Props>();
</script>
<template>
	<h1 class="page_title">
		<Icon :type="props.icon" />
		<span>
			<slot />
		</span>
	</h1>
</template>
<style lang="sass">
	@use "./PageTitle.sass"
</style>
