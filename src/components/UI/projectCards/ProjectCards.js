import React from 'react';

import styles from './projectCards.module.css';

import ProjectCard from '../projectCard/ProjectCard';

import cardData from './data';

const ProjectCards = () => {
	return (
		<>
			<div className={styles.flex}>
				<div className={styles.title}>
					<h2>Selected projects</h2>
					<p className={styles.more}>
						Visit my{' '}
						<a href='https://github.com/goodideagiver'>GitHub</a> to
						see more
					</p>
				</div>
				{cardData.map((card) => (
					<ProjectCard {...card} key={card.title} />
				))}
			</div>
		</>
	);
};

export default ProjectCards;
