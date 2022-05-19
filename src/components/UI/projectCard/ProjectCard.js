import React from 'react';

import styles from './projectCard.module.css';

import Button from '../button/Button';

const ProjectCard = ({ title, shortDesc, desc, link, color }) => {
	return (
		<div className={styles.cardWrapper}>
			<div
				className={styles.card}
				style={{
					backgroundImage: `linear-gradient(130deg,transparent 60%, ${color} 100%)`,
				}}
			>
				<p className={styles.subTitle}>{shortDesc}</p>
				<h3 className={styles.title}>{title}</h3>
				<ul className={styles.desc}>
					{desc.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
				<Button
					link={link}
					className={styles.button}
					variant='callToAction'
				>
					Check out
				</Button>
			</div>
		</div>
	);
};

export default ProjectCard;
