import React from 'react';
import ReactDOM from 'react-dom';

import NavButtons from '../navButtons/NavButtons';
import Button from '../button/Button';

import styles from './navMenu.module.css';

const NavMenu = props => {
	return ReactDOM.createPortal(
		<>
			<nav className={styles['menu-wrapper']}>
				<div className={styles.grow}>
					<Button
						className={styles.close}
						onClick={props.onMenuClose}
						variant={'danger'}
					>
						Close
					</Button>
				</div>

				<NavButtons onClick={props.onMenuClose} />

				<div className={styles.grow} />
			</nav>
			<div className={styles.backdrop} />
		</>,
		document.getElementById('overlay-root')
	);
};

export default NavMenu;
