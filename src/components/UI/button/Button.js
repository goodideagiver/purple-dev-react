import styles from './button.module.css';

import React from 'react';

const Button = props => {
	return (
		<button
			onClick={props.onClick}
			className={`${styles.button} ${
				props.variant && styles[props.variant]
			}`}
		>
			{props.children}
		</button>
	);
};

export default Button;
