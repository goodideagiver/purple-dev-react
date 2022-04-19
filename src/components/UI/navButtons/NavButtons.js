import React from 'react';

import { ActiveSectionContext } from '../../../store/active-section';
import styles from './navButtons.module.css';

const NavButtons = ({ names, onClick }) => {
	const { setVisibleSection } = ActiveSectionContext();

	const buttonsData = [
		{
			name: 'Home',
			callback: () => {
				setVisibleSection('home');
				onClick && onClick();
			},
		},
		{
			name: 'About',
			callback: () => {
				setVisibleSection('about');
				onClick && onClick();
			},
		},
		{
			name: 'Github',
			type: 'anchor',
			link: 'https://github.com/goodideagiver',
		},
		{
			name: 'Contact',
			callback: () => {
				setVisibleSection('contact');
				onClick && onClick();
			},
		},
	];

	return (
		<>
			{buttonsData.map(button => {
				if (button.type === 'anchor') {
					return (
						<a
							key={button.name}
							className={styles.button}
							onClick={button.callback}
							href={button.link}
							target='_blank'
							rel='noreferrer'
						>
							{button.name}
						</a>
					);
				}
				return (
					<button
						key={button.name}
						className={styles.button}
						onClick={button.callback}
					>
						{button.name}
					</button>
				);
			})}
		</>
	);
};

export default NavButtons;
