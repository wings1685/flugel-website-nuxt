<script setup lang="ts">
	import { fetchEntries } from "../_models/usePage";
	import { Glass, VerticalList } from "@/components/shared/Sections";
	import { PageTitle, Paragraph } from "@/components/shared/Typography";
	import type { BlogEntries, BlogEntry } from "../_models/schema";
	import "./Blog.sass";

	const entries = ref<BlogEntry[]>([...Array(5)].map((_, i) => ({
		title: '**********',
		link: '',
		published: '2026-01-01 00:00:00',
		summary: "********** ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** **********",
	})));
	const formatDate = (published: BlogEntries[number]['published']) => (new Date(published)).toLocaleDateString('ja-JP', {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
	onMounted(async () => {
		entries.value = await fetchEntries();
	});
</script>
<template>
	<Glass as="section">
		<PageTitle icon="rss">記事</PageTitle>
		<VerticalList id="blog_entries">
			<li v-for="entry of entries" :key="entry.title">
				<article>
					<Glass as="a" :href="entry.link" icon="tab" isDark target="_blank">
						<p>{{ entry.title }}</p>
					</Glass>
					<span class="published">{{ formatDate(entry.published) }}</span>
					<Paragraph class="summary">{{ entry.summary }}</Paragraph>
				</article>
			</li>
		</VerticalList>
	</Glass>
</template>
