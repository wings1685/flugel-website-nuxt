<script setup lang="ts">
	import { monthData } from "@/_global/lib/shared";
	import { useStore } from "@/_global/piquo";
	import { Glass } from "./";
	import type { Months } from "@/_global/lib/shared";

	const { selectedMonth, setSelectedMonth } = useStore('selectedMonth');

	const handleClick = (e: Event, key: Months) => {
		e.preventDefault();

		if (selectedMonth()) return;

		setSelectedMonth(key);
	};
</script>
<template>
	<nav class="wrapper">
		<Glass v-for="[key, name] of Object.entries(monthData)" as="div" mini isDark @click="(e) => handleClick(e, key)" class="btn_nav">{{ name }}</Glass>
	</nav>
</template>
<style lang="sass">
	@use "./Nav.sass"
</style>
