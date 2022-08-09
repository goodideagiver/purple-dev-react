import styles from './contactOptions.module.css';

import { FaDiscord, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import TopMessage from '../../../UI/TopMessage/TopMessage';

import { useState, useCallback } from 'react';
import { ContactOption } from './ContactOption';

const ContactOptions = () => {
	const [topMessageVisible, settopMessageVisible] = useState(false);

	const topMessageToggle = useCallback(() => {
		settopMessageVisible((prev) => !prev);
	}, []);

	const copyMail = () => {
		navigator.clipboard.writeText('contact@purpleblack.dev');
		topMessageToggle();
	};

	const listData = [
		{
			icon: <FaDiscord />,
			text: 'Discord',
			link: 'https://discord.gg/kGsCDes7VU',
		},
		{
			icon: <FaLinkedin />,
			text: 'Linkedin',
			link: 'https://www.linkedin.com/in/karol-bartkiewicz',
		},
		{
			icon: <MdEmail />,
			text: 'E-mail',
			link: 'mailto:contact@purpleblack.dev',
		},
		{
			text: 'contact@purpleblack.dev',
			onClick: copyMail,
		},
	];

	const contactOptionsElements = listData.map((item, index) => {
		const delay = index * 0.2 + 0.5 + 's';
		return (
			<li key={index}>
				<ContactOption
					icon={item.icon}
					delay={delay}
					text={item.text}
					link={item.link}
					onClick={item.onClick}
				/>
			</li>
		);
	});

	return (
		<>
			<div>
				<h3>Contact options</h3>
				<ul className={styles.list}>{contactOptionsElements}</ul>
			</div>
			{topMessageVisible && (
				<TopMessage transition={0.2} duration={2000} onHide={topMessageToggle}>
					Copied to clipboard!
				</TopMessage>
			)}
		</>
	);
};

export default ContactOptions;
