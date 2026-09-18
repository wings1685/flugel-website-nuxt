<script setup lang="ts">
	import { getHighlightedCode } from "@/components/features/Highlight/_models/usePage";
	import { codes } from "../_models/codeDeepGuard";
	import { Box } from "@/components/shared/Sections";
	import { Paragraph } from "@/components/shared/Typography";
	import { Highlight } from "@/components/features";

	const { data } = useAsyncData('shikiDeepGuard', async () => {
		const types = await getHighlightedCode(codes.types);
		const glass = await getHighlightedCode(codes.glass);

		return { types, glass };
	});
</script>
<template>
	<Box>
		<Paragraph>再帰的に Readonly を付与する DeepGuard 型を、コンポーネントの props や読み込みの戻り値の際に使用しています。</Paragraph>
		<Highlight v-if="data?.types" filename="types.ts" :code="data.types" />
		<Highlight v-if="data?.glass" filename="Glass.tsx" :code="data.glass" />
	</Box>
</template>
