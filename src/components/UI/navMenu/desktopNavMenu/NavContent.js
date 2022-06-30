import NavButtons from '../../navButtons/NavButtons';
import styles from './desktopNavMenu.module.css';
import { MdClose } from 'react-icons/md';
import Button from '../../button/Button';
import { useLockBodyScroll } from '../../../../hooks/useLockBodyScroll';

export const NavContent = ({ onMenuClose }) => {
	useLockBodyScroll();
	return (
		<div className={`${styles.desktopNav} ${styles.show} ${'acrylic'}`}>
			<Button className={styles.close} onClick={onMenuClose} variant='nav'>
				<MdClose />
			</Button>
			<h2 className={styles.title}>purpleblack.dev</h2>
			{/* <div className={styles.separator} /> */}
			<nav>
				<ul className={styles.btnContainer}>
					<NavButtons onClick={onMenuClose} />
				</ul>
			</nav>
		</div>
	);
};
