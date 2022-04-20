import React from 'react';
import ContactForm from '../../UI/contactForm/ContactForm';
import ContactOptions from './contactOptions/ContactOptions';

import styles from './contact.module.css'

const Contact = () => {
	return (
		<div className={styles.root}>
			<ContactOptions />
			<ContactForm />
		</div>
	);
};

export default Contact;
