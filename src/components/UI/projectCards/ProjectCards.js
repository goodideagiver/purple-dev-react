import React from 'react';

import styles from './projectCards.module.css';

import ProjectCard from '../projectCard/ProjectCard';

const ProjectCards = () => {
	const cardData = [
		{
			title: 'Fakeinsta',
			shortDesc: 'Instagram copy',
			desc: ['OOP', 'Custom Components', 'Async'],
			link: 'https://github.com/goodideagiver/fakeinsta',
			color: '#a66fff30',
		},
		{
			title: 'Web app',
			shortDesc: 'Polite email builder',
			desc: ['DOM manipulation', 'Vanilla JavaScript'],
			link: 'https://goodideagiver.github.io/polite-email-builder/',
			color: '#6284ff21',
		},
		{
			title: 'Adot.pl',
			shortDesc: 'Digital artist website',
			desc: ['loremipsum'],
			link: 'https://www.adot.pl/',
			color: '#ff00001f',
		},
	];

	return (
		<div className={styles.flex}>
			{cardData.map((card) => (
				<ProjectCard {...card} key={card.title} />
			))}
		</div>
	);
};

export default ProjectCards;
