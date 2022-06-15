import React, { useEffect } from 'react';

import CardBtn from './components/CardBtn';
import styles from './projectCard.module.css';
import { useState } from 'react';

const ProjectCardFeaturesList = (props) => (
	<ul className={styles.desc}>
		{props.desc.map((item) => (
			<li key={item}>{item}</li>
		))}
	</ul>
);

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
	const [lastCommitDate, setLastCommitDate] = useState(null);

	useEffect(() => {
		if (commitsFetchUrl) {
			fetch(commitsFetchUrl + '?per_page=1')
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					const lastCommitDate = new Date(data[0].commit.author.date);
					setLastCommitDate(
						lastCommitDate.toLocaleDateString() +
							' ' +
							lastCommitDate.toLocaleTimeString()
					);
				});
		}
	}, [commitsFetchUrl]);

	const cardGradientBg = {
		backgroundImage: `linear-gradient(130deg,transparent 60%, ${color} 100%)`,
	};

	const cardRevealDelay = { animationDelay: delay + 's' };

	return (
		<div style={cardRevealDelay} className={styles.cardWrapper}>
			<div className={styles.card} style={cardGradientBg}>
				<p className={styles.subTitle}>{shortDesc}</p>
				{lastCommitDate && (
					<p className={styles.commit}>Last commit: {lastCommitDate}</p>
				)}
				<h3 className={styles.title}>{title}</h3>
				<ProjectCardFeaturesList desc={desc} />
				<CardBtn link={link} tooltip={tooltip} />
			</div>
		</div>
	);
};

export default ProjectCard;
