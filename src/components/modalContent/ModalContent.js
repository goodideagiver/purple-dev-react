import Button from '../UI/button/Button';

import styles from './modalContent.module.css';

import { GrClose } from 'react-icons/gr';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

const ModalContent = (props) => {
	const contentCssClasses = `${styles.content} ${
		props.className ? props.className : ''
	} acrylic`;

	useLockBodyScroll();

	return (
		<div className={contentCssClasses}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
				<Button
					variant='danger'
					onClick={props.modalCloseHandler}
					className={styles.close}
				>
					<GrClose />
				</Button>
			</header>
			<main className={styles.children}>{props.children}</main>
		</div>
	);
};

export default ModalContent;
