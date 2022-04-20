import Slide from './slide/Slide';

import React, { useState } from 'react';

import style from './slider.module.css';

const Slider = () => {
	const [activePhoto, setActivePhoto] = useState(1);
	const sliderPhotos = [
		'https://zooart.com.pl/blog/wp-content/uploads/2021/12/Dog-Niemiecki-Arlekin-i-Czarny-1000x667-1.jpg',
		'https://static.fajnyzwierzak.pl/media/uploads/media_image/original/wpis/785/dog-niemiecki.jpg',
		'https://fajnepodroze.pl/wp-content/uploads/2020/07/Dog-niemiecki.jpg',
		'https://media.os.fressnapf.com/cms/2020/07/ratgeber_hund_rasse_portraits_australian_cattle_dog_1200x527.jpg?t=cmsimg_920',
	];

	const prevSlide = () =>
		setActivePhoto(
			activePhoto !== 0 ? activePhoto - 1 : sliderPhotos.length - 1
		);
	const nextSlide = () =>
		setActivePhoto(
			activePhoto !== sliderPhotos.length - 1 ? activePhoto + 1 : 0
		);

	return (
		<div className={style.root}>
			{activePhoto !== 0 ? (
				<button className={style.switchSlide} onClick={prevSlide}>
					<Slide img={sliderPhotos[activePhoto - 1]} />
				</button>
			) : (
				<button className={style.switchSlide} onClick={prevSlide}>
					<div className={style.repeatBtn}>
						<span className='material-icons-round'>west</span>
					</div>
				</button>
			)}
			<Slide img={sliderPhotos[activePhoto]} />
			{activePhoto !== sliderPhotos.length - 1 ? (
				<button className={style.switchSlide} onClick={nextSlide}>
					<Slide img={sliderPhotos[activePhoto + 1]} />
				</button>
			) : (
				<button className={style.switchSlide} onClick={nextSlide}>
					<div className={style.repeatBtn}>
						<span className='material-icons-round'>east</span>
					</div>
				</button>
			)}
		</div>
	);
};

export default Slider;