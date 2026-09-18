<script setup lang="ts">
	const icons = {
		home: 'house',
		rss: 'square-rss',
		lock: 'lock',
		desktop: 'desktop',
		folder: 'folder-open',
		tab: 'up-right-from-square',
		arrow: 'circle-right',
		code: 'code',
	} as const;
	type Icons = keyof typeof icons;

	export type IconProps = {
		type: Icons;
	};

	const props = defineProps<IconProps>();
</script>
<template>
	<i :class="`icon fa-solid fa-${icons[props.type]}`"></i>
</template>
