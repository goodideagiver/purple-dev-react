import ProjectCard from '../projectCard/ProjectCard';
import cardData from './data';
import styles from './projectCards.module.css';
import { useState } from 'react';
import { Button } from '../button/Button';

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

type Props = {
	toggleAllCardsVisibility: () => void;
	toggleButtonText: string;
};

const ToggleVisibleCardsButton = ({
	toggleAllCardsVisibility,
	toggleButtonText,
}: Props) => (
	<Button
		purpose='button'
		variant='secondary'
		onClick={toggleAllCardsVisibility}
	>
		{toggleButtonText}
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
					key={card.title}
					article={card.article}
					color={card.color}
					desc={card.desc}
					link={card.link}
					shortDesc={card.shortDesc}
					title={card.title}
					tooltip={card.tooltip || 'View repository'}
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
