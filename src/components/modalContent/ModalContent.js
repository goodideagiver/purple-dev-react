import Button from '../UI/button/Button';

import closeIcon from './close_white_24dp.svg';

import styles from './modalContent.module.css';

import { GrClose } from 'react-icons/gr';

const ModalContent = (props) => {
	return (
		<div className={styles.content}>
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
