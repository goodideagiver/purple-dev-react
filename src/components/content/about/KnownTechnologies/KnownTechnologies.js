import git from '../../../../assets/img/technologies/github.png';
import sass from '../../../../assets/img/technologies/sass.png';
import react from '../../../../assets/img/technologies/react.png';
import parcel from '../../../../assets/img/technologies/parcel.png';

const KnownTechnologies = ({ styles }) => {
	return (
		<div className={styles.cell}>
			<h3>Known Technologies</h3>
			<div
				className={`${styles.technologies} ${styles.cardInnerPadding}`}
			>
				<img src={git} alt='GitHub' />
				<img src={react} alt='react' />
				<img src={sass} alt='sass' />
				<img src={parcel} alt='parcel' />
			</div>
		</div>
	);
};

export default KnownTechnologies;
