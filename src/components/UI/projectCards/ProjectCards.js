import React from 'react';

import styles from './projectCards.module.css';

import ProjectCard from '../projectCard/ProjectCard';

const ProjectCards = () => {
	const cardData = [
		{
			title: 'Instagram copy',
			shortDesc: 'fakeinsta',
			desc: 'I wanted to practice OOP programming in JS and prove myself in that language, so I made an Instagram copy',
			link: 'https://github.com/goodideagiver/fakeinsta',
			color: '#a66fff30',
		},
		{
			title: 'fodsfo',
			shortDesc: 'siema z rana',
			desc: 'najlepsza siema lorem ipsum kup to pan i wez mi daj',
			link: 'foobar.com',
			color: '#6284ff21',
		},
		{
			title: 'fo342o',
			shortDesc: 'siema z rana',
			desc: 'najlepsza siema lorem ipsum kup to pan i wez mi daj',
			link: 'foobar.com',
			color: '#ff00001f',
		},
	];

	return (
		<div className={styles.flex}>
			{cardData.map(card => (
				<ProjectCard {...card} key={card.title} />
			))}
		</div>
	);
};

export default ProjectCards;
