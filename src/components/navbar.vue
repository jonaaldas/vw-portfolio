<template>
	<div class="border border-b-8">
		<h1>VALENTYNA WILLARD</h1>
		<h1>{{ pageName }}</h1>
	</div>
</template>

<script setup lang="ts">
	import {defineProps} from 'vue';
	const props = defineProps({
		pageName: {
			type: String,
			default: 'PORTFOLIO'
		}
	});
</script>

<style></style>
