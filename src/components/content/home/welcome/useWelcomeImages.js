import { useEffect, useState } from 'react';

export const useWelcomeImages = (
	delay,
	startingIndex,
	imagesArray,
	transitionLengthMiliseconds
) => {
	const [activeImageIndex, setActiveImageIndex] = useState(startingIndex);
	const [isInputBlocked, setisInputBlocked] = useState(false);

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

	const nextImageHandler = () => {
		if (isInputBlocked) return;
		setActiveImageIndex((activeImageIndex + 1) % imagesArray.length);
		setisInputBlocked(true);
		setTimeout(() => {
			setisInputBlocked(false);
		}, transitionLengthMiliseconds);
	};

	return { selectedImages, activeImageIndex, nextImageHandler };
};
