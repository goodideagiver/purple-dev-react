import ContactOptions from './contactOptions/ContactOptions';

import React from 'react';

import styles from './contact.module.css';
import { MainPageContainer } from '../../UI/MainPageContainer/MainPageContainer';

const Contact = () => {
	return (
		<MainPageContainer>
			<div className={styles['header-image']}>
				<h2 className={styles.title}>
					Choose <span>your</span> way to <span>contact me</span>
				</h2>
			</div>
			<div className={`${styles.root}`}>
				<ContactOptions />
			</div>
		</MainPageContainer>
	);
};

export default Contact;
