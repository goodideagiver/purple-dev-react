import Button from '../../UI/button/Button';

import { useState, useEffect } from 'react';

import styles from './navTop.module.css';
import NavMenu from '../navMenu/NavMenu';
import NavButtons from '../navButtons/NavButtons';

const NavTop = props => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

	useEffect(() => {
		window.addEventListener('resize', () =>
			setIsMobile(window.innerWidth < 800)
		);
	}, []);

	const menuToggle = () => setMenuOpen(menuOpen ? false : true);
	const menuClose = () => setMenuOpen(false)

	return (
		<nav className={styles.nav}>
			<h1>purpleblack.dev</h1>
			{!isMobile && <NavButtons />}
			<Button onClick={menuToggle}>Menu</Button>
			{menuOpen && <NavMenu onMenuClose={menuClose} />}
		</nav>
	);
};

export default NavTop;
