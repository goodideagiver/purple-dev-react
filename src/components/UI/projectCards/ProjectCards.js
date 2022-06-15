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

			const cards = cardData.map(
				(card, index) =>
					index < cardOnMainSiteAmount && (
						<ProjectCard
							delay={index > 0 ? (index - defaultCardOnMainSiteAmount) / 10 : 0}
							{...card}
							key={card.title}
						/>
					)
			);

			const moreCardsToViewThanInitialVisible =
				cardData.length > defaultCardOnMainSiteAmount;

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
				{cards}
			</div>
			{moreCardsToViewThanInitialVisible && (
				<Button variant='secondary' onClick={toggleAllCardsVisibility}>
					{toggleButtonText}
				</Button>
			)}
		</>
	);
};

export default ProjectCards;
