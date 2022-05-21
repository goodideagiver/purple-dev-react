import Button from '../button/Button';
import React from 'react';
import Tooltip from '../Tooltip/Tooltip';
import styles from './projectCard.module.css';

const ProjectCard = ({ title, shortDesc, desc, link, color, delay = 0 }) => {
	return (
		<div
			style={{ animationDelay: delay + 's' }}
			className={styles.cardWrapper}
		>
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
				<Tooltip text='View GitHub repository'>
					<Button
						link={link}
						className={styles.button}
						variant='callToAction'
					>
						Check out
					</Button>
				</Tooltip>
			</div>
		</div>
	);
};

export default ProjectCard;
