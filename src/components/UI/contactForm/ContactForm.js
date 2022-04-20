import React, { useState, useEffect } from 'react';

import Button from '../button/Button';

import styles from './contactForm.module.css';

const ContactForm = () => {
	const [isFormValid, setIsFormValid] = useState(null);
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	useEffect(() => {
		const formCheckDelay = setTimeout(() => {
			setIsFormValid(
				(name.trim().length > 0 && message.trim().length > 0) === true
			);
		}, 500);
		return () => {
			clearTimeout(formCheckDelay);
		};
	}, [name, message]);

	const userInputNameHandler = ev => setName(ev.target.value);
	const userInputMessageHandler = ev => setMessage(ev.target.value);

	return (
		<div className={styles.root}>
			<form
				className={`${styles.form} ${
					isFormValid === false && styles.invalid
				}`}
			>
				<div className={styles.formRow}>
					<label htmlFor='name'>Your name</label>
					<input
						value={name}
						placeholder='Your name'
						type='text'
						id='name'
						onInput={userInputNameHandler}
					/>
				</div>
				<div className={styles.formRow}>
					<label htmlFor='message'>Your message</label>
					<textarea
						value={message}
						placeholder='Type your message here'
						id='message'
						cols='30'
						rows='10'
						onInput={userInputMessageHandler}
					></textarea>
				</div>
				<Button type='send'>Send</Button>
			</form>
		</div>
	);
};

export default ContactForm;
