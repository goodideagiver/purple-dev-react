import NavButtons from '../../navButtons/NavButtons';
import styles from './desktopNavMenu.module.css';
import { MdClose } from 'react-icons/md';
import { useLockBodyScroll } from '../../../../hooks/useLockBodyScroll';

export const NavContent = ({ onMenuClose }) => {
	useLockBodyScroll();
	return (
		<div className={`${styles.desktopNav} `}>
			<button className={styles.close} onClick={onMenuClose}>
				<MdClose />
			</button>
			<nav>
				<ul className={styles.btnContainer}>
					<NavButtons onClick={onMenuClose} />
				</ul>
			</nav>
		</div>
	);
};
