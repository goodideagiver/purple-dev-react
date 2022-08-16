import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
	return (
		<div className={styles['lds-roller']}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default LoadingSpinner;
