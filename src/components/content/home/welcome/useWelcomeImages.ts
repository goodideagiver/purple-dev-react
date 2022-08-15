import { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { Image } from '../../../UI/projectCards/data/articles/ArticleTools/GalleryImage.types';

export const useWelcomeImages = (
	delay: number,
	startingIndex: number,
	imagesArray: string[] | StaticImageData[],
	transitionLengthMiliseconds: number
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

	const changeToIndex = (index: number) => {
		setisInputBlocked(true);
		setActiveImageIndex(index);
		setTimeout(() => {
			setisInputBlocked(false);
		}, transitionLengthMiliseconds);
	};

	return {
		selectedImages,
		activeImageIndex,
		nextImageHandler,
		isInputBlocked,
		setActiveImageIndex: changeToIndex,
	};
};
