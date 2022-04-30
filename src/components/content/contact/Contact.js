import React from 'react';
import ContactForm from '../../UI/contactForm/ContactForm';
import ContactOptions from './contactOptions/ContactOptions';

import styles from './contact.module.css';

import code from '../../../assets/img/contact/code.jpg';

const Contact = ({ className }) => {
	return (
		<div className={className}>
			<div className={styles['header-image']}>
				<h2 className={styles.title}>
					Choose <span>your</span> way to <span>contact me</span>
				</h2>
				<img src={code} alt='' aria-hidden='true' />
			</div>
			<div className={`${styles.root} ${className}`}>
				<ContactOptions />
				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;
