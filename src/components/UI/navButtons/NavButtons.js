import React from 'react';

import { Link } from 'react-router-dom';

import styles from './navButtons.module.css';

const NavButtons = ({ visibleButtonNames, onClick }) => {
	const pagesUrls = [
		{ name: 'Home', url: '/' },
		{ name: 'About', url: '/about' },
		{
			name: 'GitHub',
			url: 'https://github.com/goodideagiver',
			type: 'external',
		},
		{ name: 'Contact', url: '/contact' },
	];

	const linkElements = pagesUrls.map((page, index) => {
		return (
			<li key={index}>
				{page.type !== 'external' ? (
					<Link
						onClick={onClick}
						className={styles.button}
						to={page.url}
					>
						{page.name}
					</Link>
				) : (
					<a
						onClick={onClick}
						className={styles.button}
						href={page.url}
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
