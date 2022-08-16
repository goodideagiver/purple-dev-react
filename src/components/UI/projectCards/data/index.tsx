import { ReactNode } from 'react';
import { Roadmapper } from './articles/Roadmapper';

type ProjectCardData = {
	title: string;
	shortDesc: string;
	desc: string[];
	link: string;
	tooltip?: string;
	color: string;
	article?: ReactNode;
};

const cardData: ProjectCardData[] = [
	{
		title: 'Roadmapper.ts',
		shortDesc: 'Build a roadmap for your learning journey',
		desc: ['React', 'TypeScript', 'React Transition Group', 'Redux'],
		link: 'https://goodideagiver.github.io/roadmapper-ts/',
		color: '#4e6be130',
		tooltip: 'Visit website',
		article: <Roadmapper />,
	},
	{
		title: 'Fakeinsta',
		shortDesc: 'Instagram copy',
		desc: ['OOP', 'Custom Components', 'Async'],
		link: 'https://github.com/goodideagiver/fakeinsta',
		color: '#a66fff30',
	},
	{
		title: 'Polite email builder',
		shortDesc: 'Web app',
		desc: ['DOM manipulation', 'Vanilla JavaScript'],
		link: 'https://goodideagiver.github.io/polite-email-builder/',
		color: '#FA640020',
		tooltip: 'Visit website',
	},
];

export default cardData;
