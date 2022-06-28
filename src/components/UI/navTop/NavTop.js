import Button from '../../UI/button/Button';

import { useState, useEffect } from 'react';

import { MdMenu } from 'react-icons/md';

import styles from './navTop.module.css';
import NavButtons from '../navButtons/NavButtons';
import NavMenu from '../navMenu/NavMenu/NavMenu';
import { Link } from 'react-router-dom';

const NavTop = (props) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

	useEffect(() => {
		window.addEventListener('resize', () =>
			setIsMobile(window.innerWidth < 800)
		);
	}, []);

	const menuToggle = () => setMenuOpen(menuOpen ? false : true);
	const menuClose = () => setMenuOpen(false);

	return (
		<div className={styles.nav}>
			<Link className={styles.title} to='/'>
				<h1>purpleblack.dev</h1>
			</Link>
			{!isMobile && (
				<nav className={styles.listWrapper}>
					<ul className={styles.btnList}>
						<NavButtons visibleButtonNames={['GitHub', 'About', 'Contact']} />
					</ul>
				</nav>
			)}
			<Button aria-label='side menu toggle' variant='nav' onClick={menuToggle}>
				<MdMenu />
			</Button>
			<NavMenu show={menuOpen} menuClose={menuClose} />
		</div>
	);
};

export default NavTop;
