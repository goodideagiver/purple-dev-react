import NavButtons from '../../navButtons/NavButtons';
import styles from './desktopNavMenu.module.css';

import ReactDOM from 'react-dom';
import Button from '../../button/Button';
import { useRef } from 'react';

const DesktopNavMenu = ({ onMenuClose }) => {
	const backdrop = useRef();

	const backdropClickHandler = e => {
		if (e.target === backdrop.current) {
			onMenuClose();
		}
	};

	return ReactDOM.createPortal(
		<>
			<nav className={`${styles.desktopNav} ${styles.show}`}>
				<Button
					className={styles.close}
					onClick={onMenuClose}
					variant='nav'
				>
					<span className='material-symbols'>close</span>
				</Button>
				<NavButtons onClick={onMenuClose} />
			</nav>
			<div
				onClick={backdropClickHandler}
				ref={backdrop}
				className={`${styles.backdrop} ${styles['backdrop-show']}`}
			/>
		</>,
		document.getElementById('overlay-root')
	);
};

export default DesktopNavMenu;
