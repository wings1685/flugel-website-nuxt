<script setup lang="ts">
	import { unescapeTag } from "@/_global/lib/utils";
	import { getHighlightedCode } from "@/components/features/Highlight/_models/usePage";
	import { codes } from "../_models/codeProps";
	import { Box } from "@/components/shared/Sections";
	import { Paragraph } from "@/components/shared/Typography";
	import { Highlight } from "@/components/features";

	const { data } = useAsyncData('shikiProps', async () => {
		const icon = await getHighlightedCode(unescapeTag(codes.icon));
		const pageTitle = await getHighlightedCode(unescapeTag(codes.pageTitle));
		const types = await getHighlightedCode(codes.types);
		const group = await getHighlightedCode(codes.group);

		return { icon, pageTitle, types, group };
	});
</script>
<template>
	<Box>
		<Paragraph>
			A コンポーネントを B コンポーネントから呼ぶ際、A コンポーネントの props を継承し、型定義がズレないようにしています。<br />
			また、サイズや色などは共通の型定義に全てユニオン型で定義し、コンポーネントなどで使用する際は Extract や Exclude で絞り、同じ定義を作らないようにしています。
		</Paragraph>
		<Highlight v-if="data?.icon" filename="Icon.tsx" :code="data.icon" />
		<Highlight v-if="data?.pageTitle" filename="PageTitle.tsx" :code="data.pageTitle" />
		<Highlight v-if="data?.types" filename="types.ts" :code="data.types" />
		<Highlight v-if="data?.group" filename="Group.tsx" :code="data.group" />
	</Box>
</template>
