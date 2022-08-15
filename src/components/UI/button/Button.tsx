import styles from './button.module.css';

import Link from 'next/link';
import { UniversalButtonProps } from './Button.types';

export const Button = ({
	children,
	className,
	purpose,
	variant,
	href,
	onClick,
	...props
}: UniversalButtonProps) => {
	const chosenClassName = `${styles.button} ${variant ? styles[variant] : ''} ${
		className || ''
	}`;

	if (purpose === 'route') {
		return (
			<Link passHref href={href}>
				<a className={chosenClassName} {...props}>
					{children}
				</a>
			</Link>
		);
	}

	if (purpose === 'externalLink') {
		return (
			<a
				href={href}
				className={chosenClassName}
				target='_blank'
				rel='noopener noreferrer'
				{...props}
			>
				{children}
			</a>
		);
	}

	if (purpose === 'button') {
		return (
			<button onClick={onClick} className={chosenClassName} {...props}>
				{children}
			</button>
		);
	}
};
