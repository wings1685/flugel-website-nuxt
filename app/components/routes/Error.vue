<script setup lang="ts">
	import { buildTitle } from "@/_global/lib/utils";
	import { Glass, Group } from "@/components/shared/Sections";
	import { Paragraph } from "@/components/shared/Typography";

	useHead(buildTitle({title: 'Error'}));
</script>
<template>
	<main>
		<Glass as="section">
			<SharedTPageTitle icon="home">404 Not Found</SharedTPageTitle>
			<Paragraph>お探しのページは存在しないか、移動された可能性があります。</Paragraph>
			<Group>
				<Glass as="a" href="/" icon="arrow" isDark>Home</Glass>
			</Group>
		</Glass>
	</main>
</template>
