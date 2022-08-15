import { Button } from '../../../UI/button/Button';
import classes from './ContactOption.module.css';

export const ContactOption = ({ icon, text, link, onClick, delay }) => {
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
				style={{ animationDelay: delay }}
				onClick={onClick}
				purpose='button'
			>
				{icon && <span>{icon}</span>}
				<p>{text}</p>
			</Button>
		);
	}
};
