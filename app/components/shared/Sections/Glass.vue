<script setup lang="ts">
	import { Section } from "./";
	import { Icon } from "../Utils";
	import type { AsDiv, AsSection, AsLink } from "@/_global/types/components";
	import type { IconProps } from "../Utils/Icon.vue";
	import "./Glass.sass";

	type Props = {
		mini?: boolean;
		isDark?: boolean;
		href?: string;
	} & ( | AsDiv | AsSection | ( AsLink & {
		href: string;
		icon?: IconProps['type'];
		target?: '_blank';
	}) );
	const props = defineProps<Props>();
</script>
<template>
	<NuxtLink v-if="props.as === 'a'" :href="props.href" :target="props.target ?? ''" :class="[ 'glass mini is_dark', props.class ?? '' ]">
		<slot />
		<Icon v-if="props.icon" :type="props.icon" />
	</NuxtLink>
	<Section v-else-if="props.as === 'section'" :class="[ 'glass', { mini: props.mini, is_dark: props.isDark }, props.class ?? '' ]">
		<slot />
	</Section>
	<div v-else :class="[ 'glass', { mini: props.mini, is_dark: props.isDark }, props.class ?? '' ]">
		<slot />
	</div>
</template>
