import styles from './button.module.css';

import Link from 'next/link';
import { UniversalButtonProps } from './Button.types';

export const Button = ({
	children,
	className,
	purpose = 'button',
	variant,
	href,
	onClick,
	style,
	...props
}: UniversalButtonProps) => {
	const chosenClassName = `${styles.button} ${variant ? styles[variant] : ''} ${
		className || ''
	}`;

	if (purpose === 'route' && href) {
		return (
			<Link passHref href={href}>
				<a style={style} className={chosenClassName} {...props}>
					{children}
				</a>
			</Link>
		);
	}

	if (purpose === 'externalLink' && href) {
		return (
			<a
				style={style}
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

	if (purpose === 'button' && onClick) {
		return (
			<button
				style={style}
				onClick={onClick}
				className={chosenClassName}
				{...props}
			>
				{children}
			</button>
		);
	}

	return null;
};
