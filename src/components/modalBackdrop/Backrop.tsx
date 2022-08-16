import styles from './backdrop.module.css';

const Backdrop = props => {
	const backdropClickHandler = e => {
		if (e.target.className === styles.backdrop) {
			props.modalCloseHandler();
		}
	};

	return <div onClick={backdropClickHandler} className={styles.backdrop} />;
};

export default Backdrop;
