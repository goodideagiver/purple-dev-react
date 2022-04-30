import classes from './Footer.module.css';

const Footer = () => {
	const links = ['ble', 'ble', 'ble', 'ble', 'ble'];

	return (
		<footer className={classes.footer}>
			<p className={classes.title}>purpleblack.dev</p>
			<ul className={classes.list}>
				{links.map((link) => (
					<li>
						<a className={classes.link}>{link}</a>
					</li>
				))}
			</ul>
		</footer>
	);
};

export default Footer;
