import classes from './ExternalLink.module.css';

export const ExternalLink = ({ href, children, ...props }) => {
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
