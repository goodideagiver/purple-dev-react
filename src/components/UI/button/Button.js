import styles from './button.module.css';

import React from 'react';

const Button = ({ variant, className, ...props }) => {
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
