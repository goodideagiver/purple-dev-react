import React from 'react';

import styles from './projectCard.module.css';

import Button from '../button/Button';

const ProjectCard = ({ title, shortDesc, desc, link, color }) => {
	return (
		<div
			className={styles.card}
			style={{
				backgroundImage: `linear-gradient(130deg,transparent 60%, ${color} 100%)`,
			}}
		>
			<p className={styles.subTitle}>{shortDesc}</p>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.desc}>
				<p>{desc}</p>
			</div>
			<Button className={styles.button} variant='special'>Check out</Button>
		</div>
	);
};

export default ProjectCard;
