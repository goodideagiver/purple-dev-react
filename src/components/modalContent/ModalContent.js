import closeIcon from './close_white_24dp.svg';

import styles from './modalContent.module.css';

const ModalContent = props => {
	return (
		<div className={styles.content}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
				<button
					onClick={props.modalCloseHandler}
					className={styles.close}
				>
					<img src={closeIcon} alt='close icon' />
				</button>
			</header>
			<main className={styles.children}>{props.children}</main>
		</div>
	);
};

export default ModalContent;
