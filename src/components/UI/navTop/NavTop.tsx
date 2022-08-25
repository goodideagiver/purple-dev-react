import { useState } from 'react';

import { MdMenu } from 'react-icons/md';

import styles from './navTop.module.css';
import NavButtons from '../navButtons/NavButtons';
import NavMenu from '../navMenu/NavMenu/NavMenu';
import Link from 'next/link';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { Button } from '../button/Button';

const NavTop = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const isMobile = useMediaQuery('(max-width: 900px)');

	const menuToggle = () => setMenuOpen(menuOpen ? false : true);
	const menuClose = () => setMenuOpen(false);

	return (
		<div className={styles.nav}>
			<Link passHref href='/'>
				<a className={styles.title}>
					<p>purpleblack.dev</p>
				</a>
			</Link>
			{!isMobile && (
				<nav className={styles.listWrapper}>
					<ul className={styles.btnList}>
						<NavButtons
							visibleButtonNames={['GitHub', 'About', 'Contact', 'Blog']}
						/>
					</ul>
				</nav>
			)}
			{isMobile && (
				<Button
					className={styles.menuBtn}
					aria-label='side menu toggle'
					variant='nav'
					onClick={menuToggle}
					purpose='button'
				>
					<MdMenu />
				</Button>
			)}
			<NavMenu show={!!menuOpen && !!isMobile} menuClose={menuClose} />
		</div>
	);
};

export default NavTop;
