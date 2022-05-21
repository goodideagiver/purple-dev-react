import Button from '../button/Button';
import ProjectCard from '../projectCard/ProjectCard';
import cardData from './data';
import styles from './projectCards.module.css';
import { useState } from 'react';

const ProjectCards = () => {
	const defaultCardOnMainSiteAmount = 3;
	const [cardOnMainSiteAmount, setCardOnMainSiteAmount] = useState(
		defaultCardOnMainSiteAmount
	);

	const toggleAllCardsVisibility = () => {
		setCardOnMainSiteAmount(
			cardOnMainSiteAmount === defaultCardOnMainSiteAmount
				? Infinity
				: defaultCardOnMainSiteAmount
		);
	};

	const toggleButtonText =
		cardOnMainSiteAmount === defaultCardOnMainSiteAmount
			? 'Show more projects'
			: 'Show less projects';

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
				{cardData.map(
					(card, index) =>
						index < cardOnMainSiteAmount && (
							<ProjectCard {...card} key={card.title} />
						)
				)}
			</div>
			{cardData.length > defaultCardOnMainSiteAmount && (
				<Button variant='secondary' onClick={toggleAllCardsVisibility}>
					{toggleButtonText}
				</Button>
			)}
		</>
	);
};

export default ProjectCards;
