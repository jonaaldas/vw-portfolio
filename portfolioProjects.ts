interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
}

interface PortfolioCategory {
	id: number;
	title: string;
	projects: Project[];
}

const portfolioProjects: PortfolioCategory[] = [
	{
		id: 1,
		title: 'LANDSCAPE ARCHITECTURE PROJECTS',
		projects: [
			{
				id: 1,
				title: 'Project 1',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
				image: 'assets/img/demo copy.png'
			},
			{
				id: 2,
				title: 'Project 2',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
				image: 'assets/img/demo copy.png'
			},
			{
				id: 3,
				title: 'Project 2',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
				image: 'assets/img/demo copy.png'
			},
			{
				id: 4,
				title: 'Project 2',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
				image: 'assets/img/demo copy.png'
			},
			{
				id: 5,
				title: 'Project 2',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
				image: 'assets/img/demo copy.png'
			}
		]
	},
	{
		id: 2,
		title: 'ARCHITECTURE PROJECTS',
		projects: [
			{
				id: 1,
				title: 'Project 1',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
				image: 'assets/img/demo copy.png'
			},
			{
				id: 2,
				title: 'Project 2',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
				image: 'assets/img/demo copy.png'
			},
			{
				id: 3,
				title: 'Project 2',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
				image: 'assets/img/demo copy.png'
			},
			{
				id: 4,
				title: 'Project 2',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
				image: 'assets/img/demo copy.png'
			},
			{
				id: 5,
				title: 'Project 2',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
				image: 'assets/img/demo copy.png'
			}
		]
	},
	{
		id: 3,
		title: 'PRECEDENT STUDIES',
		projects: [
			{
				id: 1,
				title: 'Project 1',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
				image: 'assets/img/demo copy.png'
			},
			{
				id: 2,
				title: 'Project 2',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
				image: 'assets/img/demo copy.png'
			},
			{
				id: 3,
				title: 'Project 2',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
				image: 'assets/img/demo copy.png'
			},
			{
				id: 4,
				title: 'Project 2',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
				image: 'assets/img/demo copy.png'
			},
			{
				id: 5,
				title: 'Project 2',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio eget dolor aliquam sodales. Donec aliquam, nunc sed lacinia ultricies, quam lorem interdum tortor"',
				image: 'assets/img/demo copy.png'
			}
		]
	}
];

export default portfolioProjects;
