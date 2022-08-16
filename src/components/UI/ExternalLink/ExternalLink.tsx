import { ReactNode } from 'react';
import classes from './ExternalLink.module.css';

type Props = {
	href: string;
	children: ReactNode;
};

export const ExternalLink = ({ href, children, ...props }: Props) => {
	return (
		<a
			className={classes.link}
			href={href}
			target='_blank'
			rel='noreferrer noopener'
			{...props}
		>
			{children}
		</a>
	);
};
