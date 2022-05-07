import NavButtons from '../../navButtons/NavButtons';
import styles from './desktopNavMenu.module.css';

import { MdClose } from 'react-icons/md';

import ReactDOM from 'react-dom';
import Button from '../../button/Button';
import Foldable from '../../Foldable/Foldable';

const Backdrop = ({ backdropClickHandler }) => {
	return (
		<div
			onClick={backdropClickHandler}
			className={`${styles.backdrop} ${styles['backdrop-show']}`}
		/>
	);
};

const NavContent = ({ onMenuClose }) => {
	return (
		<nav className={`${styles.desktopNav} ${styles.show}`}>
			<Button
				className={styles.close}
				onClick={onMenuClose}
				variant='nav'
			>
				<MdClose />
			</Button>
			<h2 className={styles.title}>purpleblack.dev</h2>
			<div className={styles.separator} />
			<div className={styles.btnContainer}>
				<NavButtons onClick={onMenuClose} />
			</div>
		</nav>
	);
};

const DesktopNavMenu = ({ onMenuClose }) => {
	return ReactDOM.createPortal(
		<>
			<NavContent onMenuClose={onMenuClose} />
			<Backdrop backdropClickHandler={onMenuClose} />
		</>,
		document.getElementById('overlay-root')
	);
};

export default DesktopNavMenu;
