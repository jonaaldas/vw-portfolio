<template>
	<div>
		<Navbar pageName="RESUME" />
		<div class="container-fluid p-1 flex flex-col lg:flex-row lg:justify-around gap-3 3xl:container 3xl:max-w-7xl 3xl:m-auto mt-4 lg:items-start">
			<!-- image -->
			<div class="flex justify-center flex-col space-y-3 items-center lg:order-last lg:w-1/4">
				<div class="bg-cardBackground picture-container w-40 lg:w-11/12">
					<img src="../assets/img/home.jpg" alt="" />
					<div class="p-2">
						<h1 class="text-sm">ENGLISH</h1>
						<h1 class="text-sm">ITALIANO</h1>
						<h1 class="text-sm">UKRANIAN</h1>
					</div>
				</div>

				<div class="bg-cardBackground w-40 p-2 lg:w-11/12">
					<h2 class="text-base">Contact Me</h2>
					<p class="text-xs">valentynawillard@icloud.com</p>
					<p><a class="text-xs" href="https://wa.me/14079277722" target="_blank">1 (407) 927-7722</a></p>
				</div>
			</div>
			<!-- skills -->
			<div class="space-y-3 lg:w-1/4">
				<div class="border bg-cardBackground p-4">
					<h2 class="lg:text-sm">SOFTWARE SKILLS</h2>
					<ul class="list-inside list-disc">
						<li class="text-sm lg:text-xs">BIM AUTODESK REVIT 4+ YEARS</li>
						<li class="text-sm lg:text-xs">AUTOCAD APP 5+ YEARS</li>
						<li class="text-sm lg:text-xs">LANDFX 2+ YEARS</li>
						<li class="text-sm lg:text-xs">ADOBE CREATIVE SUIT 5+ YEARS</li>
						<li class="text-sm lg:text-xs">VECTORWORKS APP 2+ YEARS</li>
						<li class="text-sm lg:text-xs">RHINOCEROUS APP 4+ YEARS</li>
						<li class="text-sm lg:text-xs">TWIN MOTION 3+ YEARS</li>
						<li class="text-sm lg:text-xs">MICROSOFT OFFICE</li>
					</ul>
				</div>
				<div class="border bg-cardBackground p-4">
					<h2 class="lg:text-sm">PERSONAL ACHIEVEMENTS</h2>
					<ul class="list-inside list-disc">
						<li class="text-sm lg:text-xs">WORKED SINCE THE AGE OF 18 Y.O</li>
						<li class="text-sm lg:text-xs">VOLUNTEERED SINCE AGE OF 14 Y.O.</li>
						<li class="text-sm lg:text-xs">ART BASEL ARTIST 2017 - 2023</li>
					</ul>
				</div>

				<div class="border bg-cardBackground p-4">
					<h2 class="lg:text-sm">HOBBIES AND INTERESTS</h2>
					<ul class="list-inside list-disc">
						<li class="text-sm lg:text-xs">CERAMICS</li>
						<li class="text-sm lg:text-xs">SCULPTURE</li>
						<li class="text-sm lg:text-xs">PAINTING</li>
						<li class="text-sm lg:text-xs">TRAVEL</li>
						<li class="text-sm lg:text-xs">POLITICS</li>
						<li class="text-sm lg:text-xs">CLIMATE CHANGE</li>
					</ul>
				</div>
			</div>
			<!-- resume -->
			<div class="border bg-white lg:w-3/4">
				<h1>THis is my resume</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"Lorem
					ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Navbar from '../components/navbar.vue';
</script>

<style lang="scss" scoped></style>
