import Button from '../button/Button';
import ProjectCard from '../projectCard/ProjectCard';
import cardData from './data';
import styles from './projectCards.module.css';
import { useState } from 'react';

const ProjectCards = () => {
	const INITIAL_VISIBLE_CARDS = 3;
	const [visibleCards, setVisibleCards] = useState(INITIAL_VISIBLE_CARDS);

	const isVisibleCountInitial = visibleCards === INITIAL_VISIBLE_CARDS;

	const toggleAllCardsVisibility = () => {
		setVisibleCards(
			isVisibleCountInitial ? Infinity : INITIAL_VISIBLE_CARDS
		);
	};

	const toggleButtonText = isVisibleCountInitial
		? 'Show more projects'
		: 'Show less projects';

	const cards = cardData.map(
		(card, index) =>
			index < visibleCards && (
				<ProjectCard
					delay={index > 0 ? (index - INITIAL_VISIBLE_CARDS) / 10 : 0}
					{...card}
					key={card.title}
				/>
			)
	);

	const hasHiddenCards = cardData.length > INITIAL_VISIBLE_CARDS;

	return (
		<>
			<div className={styles.flex}>
				<div className={styles.title}>
					<h2>Selected projects</h2>
					<p className={styles.more}>
						Visit my <a href='https://github.com/goodideagiver'>GitHub</a> to
						see more
					</p>
				</div>
				{cards}
			</div>
			{hasHiddenCards && (
				<Button variant='secondary' onClick={toggleAllCardsVisibility}>
					{toggleButtonText}
				</Button>
			)}
		</>
	);
};

export default ProjectCards;
