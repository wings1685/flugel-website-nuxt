<script setup lang="ts">
	import { experiments } from "../_models/usePage";
	import { Glass, HorizontalList, VerticalList } from "@/components/shared/Sections";
	import { PageTitle, Paragraph } from "@/components/shared/Typography";
	import "./Archives.sass";
</script>
<template>
	<Glass as="section">
		<PageTitle icon="folder">実験一覧</PageTitle>
		<VerticalList>
			<li v-for="experiment of experiments">
				<Paragraph class="archives_paragraph">{{ experiment.description }}</Paragraph>
				<HorizontalList class="monospace">
					<li v-for="stack of experiment.stacks">{{ stack }}</li>
				</HorizontalList>
			</li>
		</VerticalList>
	</Glass>
</template>
