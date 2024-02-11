<template>
	<Navbar pageName="PORTFOLIO" />
	<div class="3xl:flex 3xl:justify-center">
		<div class="mt-28 3xl:container">
			<div v-for="projects in portfolioProjects" :key="projects.id">
				<h3 class="mb-4 ml-4 text-xs">{{ projects.title }}</h3>
				<Carousel :itemsToShow="numberOfSlide">
					<Slide v-for="project in projects.projects" :key="project.id">
						<router-link :to="`/portfolio/${projects.category}/${project.title}`">
						<div class="flex flex-col group mx-5">
							<div class="relative">
								<p class="hidden group-hover:block absolute inset-0 bg-white text-black p-2 rounded-md flex items-center justify-center mx-12 flex-col">
									<div class="text-sm">{{ project.title }}</div>
								</p>
								<img :src="project.images[0]" :alt="project.title" class="group-hover:opacity-0" />
							</div>
						</div>
						</router-link>
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
	import portfolioProjects from '../../portfolioProjects.ts';
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
				numberOfSlide.value = 4
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
