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
				.filter((el) =>
					visibleButtonNames
						? visibleButtonNames.find((nam) => nam === el.name)
						: el
				)
				.map(({ link, name, callback }) => {
					if (link && link.length) {
						return (
							<a
								key={name}
								className={styles.button}
								onClick={callback}
								href={link}
								target='_blank'
								rel='noreferrer'
							>
								<span className={styles.icon}>
									<AiOutlineLink />
								</span>
								<span>{name}</span>
							</a>
						);
					}
					return (
						<button
							key={name}
							className={styles.button}
							onClick={callback}
						>
							{name}
						</button>
					);
				})}
		</>
	);
};

export default NavButtons;
