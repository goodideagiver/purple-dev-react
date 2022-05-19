import React from 'react';

import { Link } from 'react-router-dom';

import styles from './navButtons.module.css';

const NavButtons = ({ visibleButtonNames }) => {
	const pagesUrls = [
		{ name: 'Home', url: '/' },
		{ name: 'About', url: '/about' },
		{
			name: 'GitHub',
			url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout',
			type: 'external',
		},
		{ name: 'Contact', url: '/contact' },
	];

	const linkElements = pagesUrls.map((page, index) => {
		return (
			<li key={index}>
				{page.type !== 'external' ? (
					<Link className={styles.button} to={page.url}>
						{page.name}
					</Link>
				) : (
					<a className={styles.button} href={page.url}>
						{page.name}
					</a>
				)}
			</li>
		);
	});

	return <>{linkElements}</>;
};

export default NavButtons;
