import ImgSmoothLoad from '../ImgSmoothLoad/ImgSmoothLoad';
import img from '/public/assets/img/contact/code.webp';
import styles from './PageNotFound.module.css';

const PageNotFound = () => {
	return (
		<div className={styles.empty}>
			<h2 className={styles.bigText}>Oh no!</h2>
			<p className={styles.smallText}>This page doesn't exist</p>
			<ImgSmoothLoad src={img} className={styles.bg} />
		</div>
	);
};

export default PageNotFound;
