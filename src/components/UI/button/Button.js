import styles from './button.module.css';

import Link from 'next/link';

export const Button = ({
	onClick,
	route,
	link,
	variant,
	className,
	...props
}) => {
	if (route) {
		return (
			<Link
				className={`${styles.button} ${
					variant && styles[variant]
				} ${className}`}
				href={route}
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
				target='_blank'
				rel='noopener noreferrer'
				{...props}
			>
				{props.children}
			</a>
		);
	}

	return (
		<button
			onClick={onClick}
			className={`${styles.button} ${
				variant ? styles[variant] : ''
			} ${className}`}
			{...props}
		>
			{props.children}
		</button>
	);
};

export default Button;
