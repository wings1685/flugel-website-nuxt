<script setup lang="ts">
	import { sites } from "../_models/usePage";
	import { Glass, HorizontalList, VerticalList } from "@/components/shared/Sections";
	import { PageTitle, Paragraph } from "@/components/shared/Typography";
</script>
<template>
	<Glass as="section">
		<PageTitle icon="folder">構築一覧</PageTitle>
		<VerticalList>
			<li v-for="site of sites">
				<Paragraph class="archives_paragraph">{{ site.description }}</Paragraph>
				<HorizontalList class="monospace">
					<li v-for="stack of site.stacks">{{ stack }}</li>
				</HorizontalList>
			</li>
		</VerticalList>
	</Glass>
</template>
<style lang="sass">
	@use "./Archives.sass"
</style>
