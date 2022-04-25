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
					<a href='foo'>
						<span>
							<FaDiscord />
						</span>
						<p>Discord</p>
					</a>
				</li>
				<li>
					<a href='foo'>
						<span>
							<MdEmail />
						</span>
						<p>E-mail</p>
					</a>
				</li>
				<li>
					<a href='foo'>
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
