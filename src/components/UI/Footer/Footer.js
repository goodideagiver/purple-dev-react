import classes from './Footer.module.css';
import FooterNavigation from './FooterNavigation/FooterNavigation';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<p className={classes.title}>purpleblack.dev</p>
			<div className={classes.buttons}>
				<FooterNavigation />
			</div>
		</footer>
	);
};

export default Footer;
