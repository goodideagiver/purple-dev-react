import React from 'react';

import { Link } from 'react-router-dom';

import styles from './navButtons.module.css';

const NavButtons = ({ visibleButtonNames, onClick }) => {
	let pagesUrls = [
		{ name: 'Home', url: '/' },
		{ name: 'About', url: '/about' },
		{
			name: 'GitHub',
			url: 'https://github.com/goodideagiver',
			type: 'external',
		},
		{ name: 'Contact', url: '/contact' },
	];

	if (visibleButtonNames) {
		pagesUrls = pagesUrls.filter((page) =>
			visibleButtonNames.includes(page.name)
		);
	}

	const linkElements = pagesUrls.map((page, index) => {
		return (
			<li key={index}>
				{page.type !== 'external' ? (
					<Link
						onClick={onClick}
						className={styles.button}
						style={{ animationDelay: index / 10 + 0.1 + 's' }}
						to={page.url}
					>
						{page.name}
					</Link>
				) : (
					<a
						style={{ animationDelay: index / 10 + 0.1 + 's' }}
						onClick={onClick}
						className={styles.button}
						href={page.url}
						target='_blank'
						rel='noopener noreferrer'
					>
						{page.name}
					</a>
				)}
			</li>
		);
	});

	return <>{linkElements}</>;
};

export default NavButtons;
