import React, { useEffect } from 'react';

import Button from '../button/Button';
import Tooltip from '../Tooltip/Tooltip';
import styles from './projectCard.module.css';
import { useState } from 'react';

const ProjectCard = ({
	title,
	shortDesc,
	desc,
	link,
	color,
	delay = 0,
	commitsFetchUrl,
	tooltip = 'View repository',
}) => {
	const [commitCount, setCommitCount] = useState(null);

	useEffect(() => {
		if (commitsFetchUrl) {
			fetch(commitsFetchUrl + '?per_page=1')
				.then((response) => response.json())
				.then((data) => {
					const lastCommitDate = new Date(data[0].commit.author.date);
					setCommitCount(
						lastCommitDate.toLocaleDateString() +
							' ' +
							lastCommitDate.toLocaleTimeString()
					);
				});
		}
	}, [commitsFetchUrl]);

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
				{commitCount && (
					<p className={styles.commit}>Last commit: {commitCount}</p>
				)}
				<h3 className={styles.title}>{title}</h3>

				<ul className={styles.desc}>
					{desc.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
				<Tooltip text={tooltip}>
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
