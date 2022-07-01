import Button from '../../UI/button/Button';

import { useState } from 'react';

import { MdMenu } from 'react-icons/md';

import styles from './navTop.module.css';
import NavButtons from '../navButtons/NavButtons';
import NavMenu from '../navMenu/NavMenu/NavMenu';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const NavTop = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const isMobile = useMediaQuery('(max-width: 900px)');
	// const isMobile = true;

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
			{isMobile && (
				<Button
					aria-label='side menu toggle'
					variant='nav'
					onClick={menuToggle}
				>
					<MdMenu />
				</Button>
			)}
			<NavMenu show={menuOpen && isMobile} menuClose={menuClose} />
		</div>
	);
};

export default NavTop;
