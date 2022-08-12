import { useState } from 'react';
import CardBtn from './components/CardBtn';
import styles from './projectCard.module.css';

import Modal from '../../modal/Modal';

const ProjectCardFeaturesList = (props) => (
	<ul className={styles.desc}>
		{props.desc.map((item) => (
			<li className='acrylic' key={item}>
				<span>{item}</span>
			</li>
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
	tooltip = 'View repository',
	article,
}) => {
	const [articleModalVisible, setArticleModalVisible] = useState(false);

	const cardGradientBg = {
		backgroundImage: `linear-gradient(130deg,transparent 60%, ${color} 100%)`,
	};

	const cardRevealDelay = { animationDelay: delay + 's' };

	const showArticleModalHandler = () => setArticleModalVisible(true);

	const hideArticleModalHandler = () => setArticleModalVisible(false);

	const cardButton = article ? (
		<CardBtn onClick={showArticleModalHandler} tooltip='Learn more' />
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
					visible={articleModalVisible}
					title={title}
				>
					{article}
				</Modal>
			)}
		</>
	);
};

export default ProjectCard;
