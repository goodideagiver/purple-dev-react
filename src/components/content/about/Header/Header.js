import ImgSmoothLoad from '../../../UI/ImgSmoothLoad/ImgSmoothLoad';
import profile from '/public/assets/img/about/proProgrammer.webp';
import timeSince from '../../../../helpers/timeSince';
import waves from './../Waves.module.css';
import classes from './Header.module.css';

const Header = ({ styles }) => {
	return (
		<header className={`${styles.header} ${waves.waves}`}>
			<div className={`${classes.card} acrylic`}>
				<ImgSmoothLoad
					alt='Karol face portrait with cat in the bottom'
					className={styles.picture}
					src={profile}
				/>
				<div className={classes.info}>
					<h2>Karol</h2>
					<p className={styles.developer}>Frontend Developer</p>
					<p className={styles.learning}>
						{timeSince(new Date(2021, 9, 10))} of learning frontend{' '}
					</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
