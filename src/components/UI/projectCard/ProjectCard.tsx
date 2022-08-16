import CardBtn from './components/CardBtn';
import styles from './projectCard.module.css';

import Modal from '../../modal/Modal';
import { ReactNode, useState } from 'react';

type ProjectCardFeaturesListProps = {
	desc: string[];
};

const ProjectCardFeaturesList = ({ desc }: ProjectCardFeaturesListProps) => (
	<ul className={styles.desc}>
		{desc.map((item) => (
			<li className='acrylic' key={item}>
				<span>{item}</span>
			</li>
		))}
	</ul>
);

type ProjectCardProps = {
	title: string;
	desc: string[];
	shortDesc: string;
	color: string;
	link: string;
	delay: number;
	tooltip: string;
	article?: ReactNode;
};

const ProjectCard = ({
	title,
	shortDesc,
	desc,
	link,
	color,
	delay = 0,
	tooltip = 'View repository',
	article,
}: ProjectCardProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const cardGradientBg = {
		backgroundImage: `linear-gradient(130deg,transparent 60%, ${color} 100%)`,
	};

	const cardRevealDelay = { animationDelay: delay + 's' };

	const hideArticleModalHandler = () => setIsOpen(false);

	const cardButton = article ? (
		<CardBtn onClick={() => setIsOpen(true)} tooltip='Learn more' />
	) : (
		<CardBtn link={link} tooltip={tooltip} />
	);

	return (
		<>
			<div style={cardRevealDelay} className={styles.cardWrapper}>
				<div className={styles.card} style={cardGradientBg}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.subTitle}>{shortDesc}</p>
					<ProjectCardFeaturesList desc={desc} />
					{cardButton}
				</div>
			</div>
			{article && (
				<Modal
					modalCloseHandler={hideArticleModalHandler}
					visible={isOpen}
					title={title}
				>
					{article}
				</Modal>
			)}
		</>
	);
};

export default ProjectCard;
