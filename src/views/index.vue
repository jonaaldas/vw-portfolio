<template>
	<main>
		<div class="grid-container">
			<!-- vw pic -->
			<div class="profile-picture">
				<div class="picture-container">
					<img src="../assets/img/home.jpg" alt="" />
					<div class="language-section">
						<h1>ENGLISH</h1>
						<h1>ITALIANO</h1>
						<h1>UKRANIAN</h1>
					</div>
				</div>
			</div>

			<div class="columns-container">
				<div class="bg-cardBackground links-container">
					<a href="#">
						<p>LINKS</p>
					</a>
					<router-link to="/resume" class="inline-block mt-6">
						<p>RESUME</p>
					</router-link>
					<br />
					<router-link to="/portfolio" class="inline-block mb-6">
						<p>PORTFOLIO</p>
					</router-link>
					<router-link to="/genoa">
						<p>GENOA</p>
					</router-link>
					<router-link to="/germany">
						<p>BAUHAUS</p>
					</router-link>
					<a href="#">
						<p>MIAMI</p>
					</a>
					<a href="#">
						<p>ISTANBUL</p>
					</a>
					<a href="#">
						<p>KYIV</p>
					</a>
					<a href="#">
						<p>ART</p>
					</a>
				</div>
				<div class="bg-cardBackground professional-background-container">
					<p>PROFESSIONAL BACKGROUND</p>
					<ul>
						<li>- MASTERS OF ARCHITECTURE</li>
						<li>- ARCHITECTURAL DESIGNER</li>
						<li>- LANDSCAPE DESIGNER</li>
						<li>- ISA CERTIFIED ARBORIST</li>
						<li>- OWNER OF ONE TREE ARBORIST LLC</li>
					</ul>
				</div>
				<div class="bg-cardBackground contact-me-container">
					<a href="#">
						<p>CONTACT ME</p>
					</a>
				</div>
				<div class="bg-cardBackground donate-container xl:h-fit">
					<p class="xl:mb-1">DONATE WITH ME TO UKRAINIAN ARMED FORCES</p>
					<a href="#"><p>SAVEALIFE.UA</p></a>
				</div>
				<div class="bg-cardBackground get-to-know-me-container">
					<p>GET TO KNOW ME</p>

					<p>I AM A UKRAINIAN</p>

					<p>LIVING IN AMERICA</p>

					<p>PAINTER, ARTIST, SCULPTURE</p>

					<p>PASSIONATE ABOUT POLITICS</p>
				</div>
				<div class="bg-cardBackground projects-container">
					<p>PROJECTS</p>
					<div>
						<img src="../assets/img/home.jpg" alt="" />
					</div>
				</div>
			</div>
		</div>
	</main>
</template>
<style scoped>
	main {
		padding: 1rem;
		width: 100%;
		height: 100vh;
		/* overflow: hidden; */
	}

	.grid-container {
		display: grid;
		grid-template-columns: 1fr;
		font-size: 14px;
		overflow: hidden;
	}

	.grid-container {
		display: grid;
		grid-template-columns: 1fr;
		font-size: 14px;
	}

	.profile-picture {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 1.5rem;
		padding: 0.75rem;
	}

	.picture-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 58.333333%;
		background-color: darkgrey;
	}

	.picture-container img {
		max-width: 100%;
		height: auto;
	}

	.picture-container div {
		width: 100%;
		background-color: #e5e7eb; /* Replace with the actual color of bg-cardBackground */
		padding: 0.75rem;
	}

	/* columns */
	.columns-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1.5rem;
	}

	.columns-container div {
		padding: 0.75rem;
		max-width: 250px;
	}

	/* Tablet (e.g., devices with a screen width of 768px or more) */
	@media (min-width: 768px) {
		main {
			background-color: lightgreen;
			font-size: 16px;
			/* other tablet-specific styles */
		}
		.grid-container {
			position: relative;
			height: 100%; /* Ensures grid container doesn't exceed main's height */
		}
		.profile-picture {
			position: absolute;
			top: 40%;
			left: 47%;
			transform: translate(-50%, -50%);
		}

		.columns-container {
			height: 100vh;
		}

		.professional-background-container,
		.donate-container,
		.projects-container {
			justify-self: end;
		}
	}

	/* Desktop (e.g., devices with a screen width of 1024px or more) */
	@media (min-width: 1024px) {
		main {
			background-color: orange;
			font-size: 18px;
			/* other desktop-specific styles */
		}
	}

	/* Wide Desktop (e.g., devices with a screen width of 1200px or more) */
	@media (min-width: 1280px) {
		main {
			background-color: lightcoral;
			font-size: 20px;
			/* other wide desktop-specific styles */
		}

		.columns-container div {
			max-width: 400px;
		}

		.profile-picture {
			width: 400px;
		}

		.columns-container {
			grid-template-columns: repeat(6, 1fr);
			grid-template-rows: repeat(4, 1fr);
		}

		.contact-me-container {
			grid-column: 1 / 2;
			grid-row: 4 /5;
		}

		.donate-container {
			grid-column: 2 / 3;
			grid-row: 3 / 4;
		}

		.projects-container {
			grid-column: 5 / 7;
			grid-row: 1 / 2;
			max-width: 0;
		}

		.professional-background-container {
			height: fit-content;
		}

		.get-to-know-me-container {
			grid-column: 6 / 7;
			grid-row: 3 /4;
		}

		.links-container {
			height: fit-content;
		}
	}

	@media (min-width: 2000px) {
		main {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: magenta;
		}

		.grid-container {
			max-width: 80%;
		}
	}
</style>
