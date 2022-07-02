import { useEffect, useState } from 'react';

export const useWelcomeImages = (delay, startingIndex, imagesArray) => {
	const [activeImageIndex, setActiveImageIndex] = useState(startingIndex);

	let selectedImages;

	try {
		selectedImages = [
			imagesArray.at(activeImageIndex),
			imagesArray.at(activeImageIndex - 1),
		];
	} catch (error) {
		const nextIndex =
			activeImageIndex !== imagesArray.length - 1 ? activeImageIndex + 1 : 0;
		selectedImages = [imagesArray[activeImageIndex], imagesArray[nextIndex]];
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveImageIndex((activeImageIndex + 1) % imagesArray.length);
		}, delay);

		return () => clearInterval(interval);
	}, [activeImageIndex, imagesArray.length, delay]);

	return { selectedImages, activeImageIndex };
};
