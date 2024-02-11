import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('../views/index.vue')
		},
		{
			path: '/portfolio',
			name: 'Portfolio',
			component: () => import('../views/portfolio.vue')
		},
		{
			path: '/portfolio/:category/:name',
			name: 'Each Portfolio',
			component: () => import('../views/each-portfolio.vue')
		},
		{
			path: '/resume',
			name: 'Resume',
			component: () => import('../views/resume.vue')
		}
	]
});

export default router;
