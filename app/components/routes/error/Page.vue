<script setup lang="ts">
	import { buildSiteMeta } from "@/components/routes/_models/siteMeta";
	import { Glass, Group } from "@/components/shared/Sections";
	import { Paragraph, PageTitle } from "@/components/shared/Typography";

	useHead(buildSiteMeta({ dir: '/error', meta: { title: '404 Not Found' } }));
</script>
<template>
	<main>
		<Glass as="section">
			<PageTitle icon="home">404 Not Found</PageTitle>
			<Paragraph>お探しのページは存在しないか、移動された可能性があります。</Paragraph>
			<Group>
				<Glass as="a" href="/" icon="arrow" isDark>Home</Glass>
			</Group>
		</Glass>
	</main>
</template>
