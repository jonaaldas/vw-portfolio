<template>
	<div>
		<Navbar pageName="PAGE" />
		<div>
			<h1>Portfolio</h1>
			<div v-for="projects in portfolioProjects" :key="projects.id">
				<Carousel :itemsToShow="1">
					<Slide v-for="project in projects.projects" :key="project.id">
						<div class="flex flex-col gap-2 group">
							<div class="relative">
								<p class="hidden group-hover:block absolute inset-0 bg-white text-black p-2 rounded-md flex items-center justify-center">
									{{ project.title }}
								</p>
								<img :src="project.image" :alt="project.title" class="group-hover:opacity-0" />
							</div>
						</div>
					</Slide>
					<template #addons>
						<Navigation />
						<Pagination />
					</template>
				</Carousel>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import portfolioProjects from '../../portfolioProjects.js';
	import Navbar from '@/components/navbar.vue';
	import 'vue3-carousel/dist/carousel.css';
	import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';
	console.log('🚀 ~ portfolioProjects:', portfolioProjects);
</script>
<style></style>
