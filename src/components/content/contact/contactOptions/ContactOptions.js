import React from 'react';

import styles from './contactOptions.module.css';

import { FaDiscord, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContactOptions = () => {
	return (
		<div>
			<h2>Contact me</h2>
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
			</ul>
		</div>
	);
};

export default ContactOptions;
