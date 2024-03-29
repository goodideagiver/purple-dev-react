import Link from 'next/link';
import classes from './Footer.module.css';
import FooterNavigation from './FooterNavigation/FooterNavigation';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<Link passHref href='/'>
				<a className={`${classes.title}`}>purpleblack.dev</a>
			</Link>
			<div className={classes.buttons}>
				<FooterNavigation />
			</div>
		</footer>
	);
};

export default Footer;
