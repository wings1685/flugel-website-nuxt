<script setup lang="ts">
	import { getHighlightedCode } from "@/components/features/Highlight/_models/usePage";
	import { codes } from "../_models/codeExclude";
	import { unescapeTag } from "@/_global/lib/utils";
	import { Box } from "@/components/shared/Sections";
	import { Paragraph } from "@/components/shared/Typography";
	import { Highlight } from "@/components/features";

	const { data } = await useAsyncData('shikiExclude', async () => {
		const glass = await getHighlightedCode(unescapeTag(codes.glass));

		return { glass };
	});
</script>
<template>
	<Box>
		<Paragraph>コンポーネントが div や a など複数の要素で展開する際は、div を指定する場合は href を渡さないよう、逆に a を指定する場合は href が必須であるような、排他的型制御を行っています。</Paragraph>
		<Highlight v-if="data?.glass" filename="Glass.tsx" :code="data.glass" />
	</Box>
</template>
