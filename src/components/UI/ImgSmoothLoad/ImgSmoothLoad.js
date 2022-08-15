import styles from './ImgSmoothLoad.module.css';
import { useState } from 'react';

import Image from 'next/future/image';

export const ImgSmoothLoad = ({ animate, src, className, alt, ...props }) => {
	const [isLoaded, setIsLoaded] = useState(animate === false);

	const animationStyles = animate
		? !isLoaded
			? styles.loading
			: styles.loaded
		: '';

	return (
		<Image
			src={src}
			onLoad={() => {
				setIsLoaded(true);
			}}
			className={`${animationStyles} ${className ? className : ''}`}
			alt={alt}
			{...props}
		/>
	);
};

export default ImgSmoothLoad;
