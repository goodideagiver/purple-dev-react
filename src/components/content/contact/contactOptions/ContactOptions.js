import React from 'react';

import styles from './contactOptions.module.css';

import { FaDiscord, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Button from '../../../UI/button/Button';
import TopMessage from '../../../UI/TopMessage/TopMessage';

import { useState, useCallback } from 'react';

const ContactOptions = () => {
	const [topMessageVisible, settopMessageVisible] = useState(false);

	const topMessageToggle = useCallback(() => {
		settopMessageVisible((prev) => !prev);
	}, []);

	const copyMail = () => {
		navigator.clipboard.writeText('contact@purpleblack.dev');
		topMessageToggle();
	};

	return (
		<div>
			<h3>Contact options</h3>
			<ul className={styles.list}>
				<li>
					<a href='https://discord.gg/kGsCDes7VU'>
						<span>
							<FaDiscord />
						</span>
						<p>Discord</p>
					</a>
				</li>
				<li>
					<a href='mailto:contact@purpleblack.dev'>
						<span>
							<MdEmail />
						</span>
						<p>E-mail</p>
					</a>
				</li>
				<li>
					<a href='https://www.linkedin.com/in/karol-bartkiewicz'>
						<span>
							<FaLinkedin />
						</span>
						<p>Linkedin</p>
					</a>
				</li>
				<li>
					<Button className={styles.option} onClick={copyMail}>
						<p>contact@purpleblack.dev</p>
					</Button>
					{topMessageVisible && (
						<TopMessage
							transition={0.2}
							duration={2000}
							onHide={topMessageToggle}
						>
							Copied to clipboard!
						</TopMessage>
					)}
				</li>
			</ul>
		</div>
	);
};

export default ContactOptions;
