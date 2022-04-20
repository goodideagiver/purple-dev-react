import React, { useState, useEffect } from 'react';

import Button from '../button/Button';

import styles from './contactForm.module.css';

const ContactForm = () => {
	const [isFormValid, setIsFormValid] = useState(null);
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	useEffect(() => {
		const formCheckDelay = setTimeout(() => {
			if (name.trim().length && message.trim().length) {
				setIsFormValid(true);
			}
		}, 500);
		return () => {
			clearTimeout(formCheckDelay);
		};
	}, [name, message]);

	const userInputNameHandler = ev => setName(ev.target.value);
	const userInputMessageHandler = ev => setMessage(ev.target.value);

	const checkFormValid = () => {
		if (name.trim().length > 0 && message.trim().length > 0) {
			setIsFormValid(true);
		} else {
			setIsFormValid(false);
		}
	};

	const sendEmailHandler = ev => {
		ev.preventDefault();
		checkFormValid();
		if (isFormValid) {
			//send email
		}
	};

	return (
		<div className={styles.root}>
			{isFormValid === false && (
				<div className={styles.invalidMsg}>
					<p>Oh no! There is something wrong with your input 🤨</p>
					{!name.trim().length && <p>❌ Name field is empty.</p>}
					{!message.trim().length && (
						<p>❌ Message field is empty.</p>
					)}
				</div>
			)}
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
						required
						value={message}
						placeholder='Type your message here'
						id='message'
						cols='30'
						rows='10'
						onInput={userInputMessageHandler}
					></textarea>
				</div>
				<Button onClick={sendEmailHandler} type='send'>
					Send
				</Button>
			</form>
		</div>
	);
};

export default ContactForm;
