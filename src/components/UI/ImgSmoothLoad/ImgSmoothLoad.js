import styles from './ImgSmoothLoad.module.css';
import { useState } from 'react';

const ImgSmoothLoad = ({ src, className, alt }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<img
			src={src}
			onLoad={() => {
				setIsLoaded(true);
			}}
			className={`${
				!isLoaded ? styles.loading : styles.loaded
			} ${className}`}
			alt={alt}
		/>
	);
};

export default ImgSmoothLoad;
