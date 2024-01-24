<template>
	<div>
		<Navbar pageName="PAGE" />
		<div>
			<h1>Portfolio</h1>
			<div v-for="projects in portfolioProjects" :key="projects.id">
				<h2>{{ projects.title }}</h2>
				<Carousel :itemsToShow="numberOfSlide">
					<Slide v-for="project in projects.projects" :key="project.id">
						<div class="flex flex-col gap-2 group">
							<div class="relative">
								<p class="hidden group-hover:block absolute inset-0 bg-white text-black p-2 rounded-md flex items-center justify-center mx-12">
									{{ project.title }}
									{{ project.description }}
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
	import Navbar from '../components/navbar.vue';
	import 'vue3-carousel/dist/carousel.css';
	import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';

	import {ref, watch, onMounted} from 'vue';
	const screenSize = ref(window.innerWidth);
	const numberOfSlide = ref(1);

	watch(
		screenSize,
		async () => {
			if (screenSize.value < 640) {
				numberOfSlide.value = 1;
			} else if (screenSize.value < 768) {
				numberOfSlide.value = 2;
			} else if (screenSize.value < 1024) {
				numberOfSlide.value = 3;
			} else {
				numberOfSlide.value = 4;
			}
		},
		{immediate: true}
	);

	onMounted(() => {
		window.addEventListener('resize', () => {
			screenSize.value = window.innerWidth;
		});
	});
</script>
<style></style>
