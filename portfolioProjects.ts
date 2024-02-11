interface Project {
	id: number;
	title: string;
	projectGoal: Array<string>;
	projectAchievement: Array<string>;
	projectDescription: Array<string>;
	softwareUser: Array<string>;
	images: Array<string>;
}

interface PortfolioCategory {
	id: number;
	category: string;
	title: string;
	projects: Project[];
}

const portfolioProjects: PortfolioCategory[] = [
	{
		id: 1,
		category: 'landscape',
		title: 'LANDSCAPE ARCHITECTURE PROJECTS',
		projects: [
			{
				id: 1,
				title: 'Land Project 1',
				projectGoal: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectAchievement: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectDescription: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				softwareUser: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],

				images: ['/assets/img/demo copy.png', '/assets/img/demo copy.png', '/assets/img/demo copy.png', '/assets/img/demo copy.png', '/assets/img/demo copy.png', '/assets/img/demo copy.png']
			},
			{
				id: 2,
				title: 'Land Project 2',
				projectGoal: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectAchievement: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectDescription: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				softwareUser: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				images: ['/assets/img/demo copy.png']
			},
			{
				id: 3,
				title: 'Land Project 2',
				projectGoal: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectAchievement: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectDescription: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				softwareUser: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				images: ['/assets/img/demo copy.png']
			},
			{
				id: 4,
				title: 'Land Project 2',
				projectGoal: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectAchievement: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectDescription: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				softwareUser: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				images: ['/assets/img/demo copy.png']
			},
			{
				id: 5,
				title: 'Land Project 2',
				projectGoal: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectAchievement: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectDescription: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				softwareUser: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				images: ['/assets/img/demo copy.png']
			}
		]
	},
	{
		id: 2,
		category: 'architecture',
		title: 'ARCHITECTURE PROJECTS',
		projects: [
			{
				id: 1,
				title: 'Arch Project 1',
				projectGoal: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectAchievement: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectDescription: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				softwareUser: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				images: ['/assets/img/demo copy.png']
			},
			{
				id: 2,
				title: 'Arch Project 2',
				projectGoal: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectAchievement: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectDescription: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				softwareUser: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				images: ['/assets/img/demo copy.png']
			},
			{
				id: 3,
				title: 'Arch Project 2',
				projectGoal: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectAchievement: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectDescription: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				softwareUser: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				images: ['/assets/img/demo copy.png']
			},
			{
				id: 4,
				title: 'Arch Project 2',
				projectGoal: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectAchievement: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectDescription: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				softwareUser: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				images: ['/assets/img/demo copy.png']
			},
			{
				id: 5,
				title: 'Arch Project 2',
				projectGoal: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectAchievement: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectDescription: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				softwareUser: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				images: ['/assets/img/demo copy.png']
			}
		]
	},
	{
		id: 3,
		category: 'precedent',
		title: 'PRECEDENT STUDIES',
		projects: [
			{
				id: 1,
				title: 'Prec Project 1',
				projectGoal: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectAchievement: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectDescription: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				softwareUser: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				images: ['/assets/img/demo copy.png']
			},
			{
				id: 2,
				title: 'Prec Project 2',
				projectGoal: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectAchievement: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectDescription: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				softwareUser: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				images: ['/assets/img/demo copy.png']
			},
			{
				id: 3,
				title: 'Prec Project 2',
				projectGoal: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectAchievement: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectDescription: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				softwareUser: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				images: ['/assets/img/demo copy.png']
			},
			{
				id: 4,
				title: 'Prec Project 2',
				projectGoal: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectAchievement: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectDescription: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				softwareUser: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				images: ['/assets/img/demo copy.png']
			},
			{
				id: 5,
				title: 'Prec Project 2',
				projectGoal: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectAchievement: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				projectDescription: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				softwareUser: [
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"'
				],
				images: ['/assets/img/demo copy.png']
			}
		]
	}
];

export default portfolioProjects;

// resume page
// project page to be complete
