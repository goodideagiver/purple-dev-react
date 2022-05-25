import LoadingSpinner from './../../../UI/LoadingSpinner/LoadingSpinner';
import styles from './LoadingSpinnerContent.module.css';

const LoadingSpinnerContent = () => {
	return (
		<div className={styles.loading}>
			<LoadingSpinner />
		</div>
	);
};

export default LoadingSpinnerContent;
