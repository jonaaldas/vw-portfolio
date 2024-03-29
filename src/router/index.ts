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
		},
		{
			path: '/genoa',
			name: 'Genoa',
			component: () => import('../views/genoa.vue')
		},
		{
			path: '/germany',
			name: 'Germany',
			component: () => import('../views/germany.vue')
		},
		{
			path: '/my_portfolio',
			name: 'my Portfolio',
			component: () => import('../views/my_portfolio.vue')
		}
	]
});
router.beforeEach((to, from, next) => {
	if (to.path !== '/my_portfolio') {
		next({path: '/my_portfolio'});
	} else {
		next();
	}
});
export default router;
