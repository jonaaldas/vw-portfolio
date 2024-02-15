<template>
	<Navbar pageName="PORTFOLIO" :subName="portfolioName" />
	<div class="mt-4 p-1 3xl:flex 3xl:justify-center">
		<div class="space-y-3 md:flex md:flex-row md:space-y-0 md:space-x-3 3xl:container">
			<div class="space-y-3 md:w-1/3">
				<div class="bg-cardBackground p-2">
					<h1 class="text-lg">Project Goals</h1>
					<ul v-for="goals in filteredProjectData.projectGoal">
						<li class="text-sm">{{ goals }}</li>
					</ul>
				</div>
				<div class="bg-cardBackground p-2">
					<h1 class="text-lg">Project Achievements</h1>
					<ul v-for="achievements in filteredProjectData.projectAchievement">
						<li class="text-sm">{{ achievements }}</li>
					</ul>
				</div>
			</div>

			<div class="md:space-y-3 md:w-2/3">
				<!-- carousel of images -->
				<Carousel v-if="screenSize > 768" :itemsToShow="numberOfSlide">
					<Slide v-for="(image, index) in filteredProjectData.images" :key="index">
						<div class="flex flex-col mx-5">
							<div class="relative">
								<img :src="image" class="h-[600px]" />
							</div>
						</div>
					</Slide>
					<template #addons>
						<Navigation />
						<Pagination />
					</template>
				</Carousel>

				<div class="md:flex gap-2 space-y-3 md:space-y-0">
					<div class="bg-cardBackground p-2 md:w-3/5">
						<h1 class="text-lg">Project description</h1>
						<ul v-for="description in filteredProjectData.projectDescription">
							<li class="text-sm">{{ description }}</li>
						</ul>
					</div>
					<div class="bg-cardBackground p-2 md:w-2/5">
						<h1 class="text-lg">Software Used</h1>
						<ul v-for="software in filteredProjectData.softwareUser">
							<li class="text-sm">{{ software }}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div v-if="screenSize <= 768" class="space-y-3 mt-4 md:flex md:flex-row md:flex-wrap md:space-y-0">
			<img v-for="image in filteredProjectData.images" :src="image" alt="project image" class="md:w-1/3" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import {useRoute} from 'vue-router';
	import {computed, ref, onMounted, watch} from 'vue';
	import portfolioProjects from '../../portfolioProjects.ts';
	import Navbar from '../components/navbar.vue';
	import 'vue3-carousel/dist/carousel.css';
	import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';

	const route = useRoute();
	const portfolioName = route.params.name;
	const portfolioCategory = route.params.category;
	const screenSize = ref(window.innerWidth);
	const numberOfSlide = ref(1);

	const filteredProjectData = computed(() => {
		const filteredData = portfolioProjects.filter(project => project.category === portfolioCategory)[0]?.projects.filter(project => project.title === portfolioName)[0];
		return filteredData;
	});

	watch(
		screenSize,
		async () => {
			if (screenSize.value < 640) {
				// numberOfSlide.value = 1;
			} else if (screenSize.value < 768) {
				// numberOfSlide.value = 2;
			} else if (screenSize.value < 1024) {
				// numberOfSlide.value = 3;
			} else {
				// numberOfSlide.value = 4;
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

<style scoped></style>
