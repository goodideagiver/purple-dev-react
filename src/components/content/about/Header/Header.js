import ImgSmoothLoad from '../../../UI/ImgSmoothLoad/ImgSmoothLoad';
import profile from '../../../../assets/img/about/proProgrammer.png';
import timeSince from '../../../../helpers/timeSince';

const Header = ({ styles }) => {
	return (
		<header className={styles.header}>
			<ImgSmoothLoad
				alt='Karol face portrait with cat in the bottom'
				className={styles.picture}
				src={profile}
			/>
			<div>
				<h2>Karol</h2>
				<p className={styles.developer}>Frontend Developer</p>
				<p className={styles.learning}>
					{timeSince(new Date(2021, 9, 10))} of learning frontend{' '}
				</p>
			</div>
		</header>
	);
};

export default Header;
