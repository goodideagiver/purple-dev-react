import styles from './button.module.css';

import React from 'react';

const Button = ({ link, variant, className, type, ...props }) => {
	if (type === 'anchor' || (link && link.length)) {
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
				variant && styles[variant]
			} ${className}`}
			{...props}
		/>
	);
};

export default Button;
