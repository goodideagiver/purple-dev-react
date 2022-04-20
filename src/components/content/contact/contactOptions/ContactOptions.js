import React from 'react';

import styles from './contactOptions.module.css';

const ContactOptions = () => {
	return (
		<div>
			<h2>Contact me</h2>
			<ul className={styles.list}>
				<li>
					<a href='foo'>
						<span class='material-icons-round'>keyboard</span>
						<p>Discord</p>
					</a>
				</li>
				<li>
					<a href='foo'>
						<span className='material-icons-round'>email</span>
						<p>E-mail</p>
					</a>
				</li>
				<li>
					<a href='foo'>
						<span class='material-icons-round'>work</span>
						<p>Linkedin</p>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default ContactOptions;
