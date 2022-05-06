import NavButtons from '../navButtons/NavButtons';
import classes from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<p className={classes.title}>purpleblack.dev</p>
			<div className={classes.buttons}>
				<NavButtons />
			</div>
		</footer>
	);
};

export default Footer;
