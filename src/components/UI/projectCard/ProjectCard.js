import CardBtn from './components/CardBtn';
import styles from './projectCard.module.css';

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
	tooltip = 'View repository',
}) => {
	const cardGradientBg = {
		backgroundImage: `linear-gradient(130deg,transparent 60%, ${color} 100%)`,
	};

	const cardRevealDelay = { animationDelay: delay + 's' };

	return (
		<div style={cardRevealDelay} className={styles.cardWrapper}>
			<div className={styles.card} style={cardGradientBg}>
				<p className={styles.subTitle}>{shortDesc}</p>
				<h3 className={styles.title}>{title}</h3>
				<ProjectCardFeaturesList desc={desc} />
				<CardBtn link={link} tooltip={tooltip} />
			</div>
		</div>
	);
};

export default ProjectCard;
