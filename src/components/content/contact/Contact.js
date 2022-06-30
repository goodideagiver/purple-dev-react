import ContactOptions from './contactOptions/ContactOptions';
import ImgSmoothLoad from '../../UI/ImgSmoothLoad/ImgSmoothLoad';
import React from 'react';
import code from '../../../assets/img/contact/code.webp';
import styles from './contact.module.css';
import { MainPageContainer } from '../../UI/MainPageContainer/MainPageContainer';

const Contact = () => {
	return (
		<MainPageContainer>
			<div className={styles['header-image']}>
				<h2 className={styles.title}>
					Choose <span>your</span> way to <span>contact me</span>
				</h2>
				{/* <ImgSmoothLoad src={code} alt='' aria-hidden='true' /> */}
			</div>
			<div className={`${styles.root}`}>
				<ContactOptions />
			</div>
		</MainPageContainer>
	);
};

export default Contact;
