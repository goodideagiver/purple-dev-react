import Button from '../../UI/button/Button';
import Modal from '../../modal/Modal';

import { useState, useEffect } from 'react';

import styles from './navTop.module.css';

const NavTop = props => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
	const [mobileModalOpen, setmobileModalOpen] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', () =>
			setIsMobile(window.innerWidth < 800)
		);
	}, []);

	const modalToggle = () =>
		setmobileModalOpen(mobileModalOpen ? false : true);

	if (!isMobile) {
		return (
			<nav className={styles.nav}>
				{props.navButtons.map(button => (
					<button
						key={button.name}
						className={styles.button}
						onClick={button.callback}
					>
						{button.name}
					</button>
				))}
			</nav>
		);
	}

	return (
		<>
			<nav className={`${styles.nav} ${styles.center}`}>
				<Button onClick={modalToggle}>Menu</Button>
			</nav>
			{mobileModalOpen && (
				<Modal modalCloseHandler={modalToggle} title='Siema'>
					{props.navButtons.map(button => (
						<button
							key={button.name}
							className={styles.button}
							onClick={button.callback}
						>
							{button.name}
						</button>
					))}
				</Modal>
			)}
		</>
	);
};

export default NavTop;
