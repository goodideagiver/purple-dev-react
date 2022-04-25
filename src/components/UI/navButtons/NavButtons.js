import React from 'react';

import { AiOutlineLink } from 'react-icons/ai';

import { ActiveSectionContext } from '../../../store/active-section';
import styles from './navButtons.module.css';

const NavButtons = ({ visibleButtonNames, onClick }) => {
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
			name: 'GitHub',
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
			{buttonsData
				.filter(el => {
					if (visibleButtonNames) {
						return visibleButtonNames.find(nam => nam === el.name);
					} else {
						return el;
					}
				})
				.map(button => {
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
								<span className={styles.icon}>
									<AiOutlineLink />
								</span>
								<span>{button.name}</span>
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
