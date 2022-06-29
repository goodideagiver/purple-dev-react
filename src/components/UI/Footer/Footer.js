import { Link } from 'react-router-dom';
import classes from './Footer.module.css';
import FooterNavigation from './FooterNavigation/FooterNavigation';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<Link className={`${classes.title}`} to='/'>
				purpleblack.dev
			</Link>
			<div className={classes.buttons}>
				<FooterNavigation />
			</div>
		</footer>
	);
};

export default Footer;
