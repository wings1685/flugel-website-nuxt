<script setup lang="ts">
	import { flugel } from "@/_global/lib/shared";
	import { Glass, Group } from "./";

	const year = ref<number>(2026);

	onMounted(() => {
		year.value = ((new Date()).getFullYear());
	});
</script>
<template>
	<footer>
		<Group>
			<Glass mini>
				<p class="copyright">{{ flugel }} &copy; {{ year }}</p>
			</Glass>
		</Group>
	</footer>
</template>
