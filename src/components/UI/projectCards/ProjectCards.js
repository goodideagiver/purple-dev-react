import Button from '../button/Button';
import ProjectCard from '../projectCard/ProjectCard';
import cardData from './data';
import styles from './projectCards.module.css';
import { useState } from 'react';

const ProjectCardsHeader = () => (
	<div className={styles.title}>
		<h2>Selected projects</h2>
		<p className={styles.more}>
			Visit my{' '}
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://github.com/goodideagiver'
			>
				GitHub
			</a>{' '}
			to see more
		</p>
	</div>
);

const ToggleVisibleCardsButton = (props) => (
	<Button variant='secondary' onClick={props.toggleAllCardsVisibility}>
		{props.toggleButtonText}
	</Button>
);

const ProjectCards = () => {
	const INITIAL_VISIBLE_CARDS = 3;
	const [visibleCards, setVisibleCards] = useState(INITIAL_VISIBLE_CARDS);

	const isVisibleCountInitial = visibleCards === INITIAL_VISIBLE_CARDS;

	const toggleAllCardsVisibility = () => {
		setVisibleCards(isVisibleCountInitial ? Infinity : INITIAL_VISIBLE_CARDS);
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
					article={card.article}
				/>
			)
	);

	const hasHiddenCards = cardData.length > INITIAL_VISIBLE_CARDS;

	return (
		<>
			<div className={styles.flex}>
				<ProjectCardsHeader />
				{cards}
			</div>
			{hasHiddenCards && (
				<ToggleVisibleCardsButton
					toggleAllCardsVisibility={toggleAllCardsVisibility}
					toggleButtonText={toggleButtonText}
				/>
			)}
		</>
	);
};

export default ProjectCards;
