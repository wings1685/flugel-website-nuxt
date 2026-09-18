<script setup lang="ts">
	import { Footer, Header, Nav } from "@/components/shared/Sections";
	import { Bg } from "@/components/shared/Utils";
	import "@/_global/styles/global.sass";
</script>
<template>
	<Header />
	<NuxtPage />
	<Nav />
	<Footer />
	<Bg />
</template>
