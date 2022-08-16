import React, { ReactNode } from 'react';
import { Button } from '../../../UI/button/Button';
import classes from './ContactOption.module.css';

type ContactOptionProps = {
	text: string;
	icon?: ReactNode;
	onClick?: () => void;
	delay?: string;
	link?: string;
};

export const ContactOption = ({
	icon,
	text,
	link,
	onClick,
	delay,
}: ContactOptionProps) => {
	if (link) {
		return (
			<a
				className={classes.option}
				style={{ animationDelay: delay }}
				href={link}
				target='blank'
				rel='noreferrer'
				onClick={onClick}
			>
				{icon && <span>{icon}</span>}
				<p>{text}</p>
			</a>
		);
	}

	if (onClick) {
		return (
			<Button
				className={classes.option}
				onClick={onClick}
				purpose='button'
				style={{ animationDelay: delay } as React.CSSProperties}
			>
				{icon && <span>{icon}</span>}
				<p>{text}</p>
			</Button>
		);
	}

	return null;
};
