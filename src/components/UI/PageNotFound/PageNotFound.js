import styles from './PageNotFound.module.css';

const PageNotFound = () => {
	return (
		<div className={styles.empty}>
			<h2>Oh no!</h2>
			<p>This page doesn't exist</p>
		</div>
	);
};

export default PageNotFound;
