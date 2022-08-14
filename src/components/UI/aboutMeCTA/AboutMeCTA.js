import Button from '../button/Button';
import ImgSmoothLoad from './../ImgSmoothLoad/ImgSmoothLoad';
import classes from './AboutMeCTA.module.css';
import programmer from '/public/assets/img/programmer/proProgrammer.webp';

const AboutMeCTA = () => {
	return (
		<div className={classes['about-me']}>
			<div className={classes.image}>
				<ImgSmoothLoad src={programmer} alt='Karol in long coat' />
			</div>
			<div className={classes.text}>
				<h2 className={classes.title}>More about me</h2>
				<p>Click the button below to read more.</p>
				<Button
					className={classes.button}
					variant='callToAction'
					route='/about'
				>
					About me
				</Button>
			</div>
		</div>
	);
};

export default AboutMeCTA;
