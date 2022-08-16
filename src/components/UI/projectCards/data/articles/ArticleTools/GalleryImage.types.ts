import { StaticImageData } from 'next/image';

export type Image = {
	src: string | StaticImageData;
	alt: string;
};

export type GalleryImageProps = {
	image: Image;
};
