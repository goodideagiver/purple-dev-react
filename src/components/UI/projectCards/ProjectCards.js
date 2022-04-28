import React from 'react';

import styles from './projectCards.module.css';

import ProjectCard from '../projectCard/ProjectCard';

import cardData from './data';

const ProjectCards = () => {
	return (
		<div className={styles.flex}>
			{cardData.map((card) => (
				<ProjectCard {...card} key={card.title} />
			))}
		</div>
	);
};

export default ProjectCards;
