import styles from './desktopNavMenu.module.css';

export const Backdrop = ({ backdropClickHandler }) => {
	return (
		<div
			onClick={backdropClickHandler}
			className={`${styles.backdrop} ${styles['backdrop-show']}`}
		/>
	);
};
