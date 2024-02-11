<template>
	<div class="h-12 text-sm flex justify-center items-center bg-[#cccccc] md:justify-start ">
		<div class="flex w-11/12 md:max-w-fit md:flex-row space-x-2 flex-wrap 3xl:container">
			<router-link to="/"><h1 class="mr-auto md:mx-4">VALENTYNA WILLARD</h1></router-link>
			<h1>{{ pageName }}</h1>
			<h1>{{ subName }}</h1>
		</div>
	</div>
</template>

<script setup lang="ts">
	import {defineProps} from 'vue';
	const props = defineProps({
		pageName: {
			type: String,
			default: 'PORTFOLIO'
		},
		subName: {
			type: String,
			default: ''
		}
	});
</script>

<style></style>
