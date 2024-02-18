<template>
	<Navbar pageName="GENOA - STUDY ABROAD" />
	<div class="grid grid-cols-1 grid-rows-6 space-y-3 mt-4 p-1 md:grid-cols-3 md:grid-rows-2 md:space-y-0 md:gap-2 3xl:container 3xl:m-auto">
		<div class="bg-cardBackground">
			<h1 class="p-2 text-sm md:text-lg lg:text-xl 3xl:text-3xl">20+ CITIES VISITED</h1>
			<div class="h-fit">
				<Carousel>
					<Slide v-for="slide in 10" :key="slide" class="w-full object-cover">
						<div>
							<img src="/assets/img/demo copy.png" alt="" />
						</div>
					</Slide>

					<template #addons>
						<Navigation />
					</template>
				</Carousel>
			</div>
		</div>
		<div class="bg-cardBackground">
			<h1 class="p-2 text-sm md:text-lg lg:text-xl 3xl:text-3xl">GENOA PROJECT</h1>
			<div class="h-fit">
				<Carousel>
					<Slide v-for="slide in 10" :key="slide" class="w-full object-cover">
						<div>
							<img src="/assets/img/demo copy.png" alt="" class="w-full h-full object-contain" />
						</div>
					</Slide>

					<template #addons>
						<Navigation />
					</template>
				</Carousel>
			</div>
		</div>
		<div class="bg-cardBackground">
			<h1 class="p-2 text-sm md:text-lg lg:text-xl 3xl:text-3xl">FOOD AND CULTURE EXPERIENCE</h1>
			<div class="h-fit">
				<Carousel>
					<Slide v-for="slide in 10" :key="slide" class="w-full object-cover">
						<div>
							<img src="/assets/img/demo copy.png" alt="" class="w-full h-full object-contain" />
						</div>
					</Slide>

					<template #addons>
						<Navigation />
					</template>
				</Carousel>
			</div>
		</div>
		<div class="bg-cardBackground">
			<h1 class="p-2 text-sm md:text-lg lg:text-xl 3xl:text-3xl">MODERN ARCHITECTURE LANDMARKS SEEN</h1>
			<div class="h-fit">
				<Carousel>
					<Slide v-for="slide in 10" :key="slide" class="w-full object-cover">
						<div>
							<img src="/assets/img/demo copy.png" alt="" class="w-full h-full object-contain" />
						</div>
					</Slide>

					<template #addons>
						<Navigation />
					</template>
				</Carousel>
			</div>
		</div>
		<div class="bg-cardBackground">
			<h1 class="p-2 text-sm md:text-lg lg:text-xl 3xl:text-3xl">HISTORIC ARCHITECTURE EXPERIENCES</h1>
			<div class="h-fit">
				<Carousel>
					<Slide v-for="slide in 10" :key="slide" class="w-full object-cover">
						<div>
							<img src="/assets/img/demo copy.png" alt="" class="w-full h-full object-contain" />
						</div>
					</Slide>

					<template #addons>
						<Navigation />
					</template>
				</Carousel>
			</div>
		</div>
		<div class="bg-cardBackground">
			<h1 class="p-2 text-sm md:text-lg lg:text-xl 3xl:text-3xl">ATTENDED MUSEUMS</h1>
			<div class="h-fit">
				<Carousel>
					<Slide v-for="slide in 10" :key="slide" class="w-full object-cover">
						<div>
							<img src="/assets/img/demo copy.png" alt="" class="w-full h-full object-contain" />
						</div>
					</Slide>

					<template #addons>
						<Navigation />
					</template>
				</Carousel>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Navbar from '../components/navbar.vue';
	import 'vue3-carousel/dist/carousel.css';
	import {Carousel, Slide, Navigation} from 'vue3-carousel';
</script>

<style scoped>
	.carousel__item {
		width: 100%;
		background-color: red;
		color: var(--vc-clr-white);
		font-size: 20px;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	/* 
	.carousel__slide {
		padding: 10px;
	}

	.carousel__prev,
	.carousel__next {
		box-sizing: content-box;
		border: 5px solid white;
	} */
</style>
