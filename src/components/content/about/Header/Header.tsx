import ImgSmoothLoad from '../../../UI/ImgSmoothLoad/ImgSmoothLoad';
import profile from '/public/assets/img/about/proProgrammer.webp';
import timeSince from '../../../../helpers/timeSince';
import waves from './../Waves.module.css';
import classes from './Header.module.css';

type Props = {
	styles: { [key: string]: string };
};

const Header = ({ styles }: Props) => {
	return (
		<header className={`${styles.header} ${waves.waves}`}>
			<div className={waves.wavesWrapper}>
				<div aria-hidden='true' className={waves.wave}></div>
			</div>
			<div className={`${classes.card}`}>
				<ImgSmoothLoad
					alt='Karol face portrait with cat in the bottom'
					className={styles.picture}
					src={profile}
					priority={true}
				/>
				<div className={classes.info}>
					<h2>Karol</h2>
					<p className={styles.developer}>Frontend Developer</p>
					<p className={styles.learning}>
						{timeSince(new Date(2021, 9, 10))} of coding{' '}
					</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
