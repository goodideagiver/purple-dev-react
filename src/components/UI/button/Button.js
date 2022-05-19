import styles from './button.module.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ route, link, variant, className, ...props }) => {
	if (route) {
		return (
			<Link
				className={`${styles.button} ${
					variant && styles[variant]
				} ${className}`}
				to={route}
			>
				{props.children}
			</Link>
		);
	}

	if (link && link.length) {
		return (
			<a
				href={link}
				className={`${styles.button} ${
					variant && styles[variant]
				} ${className}`}
				{...props}
			>
				{props.children}
			</a>
		);
	}

	return (
		<button
			className={`${styles.button} ${
				variant ? styles[variant] : ''
			} ${className}`}
			{...props}
		/>
	);
};

export default Button;
