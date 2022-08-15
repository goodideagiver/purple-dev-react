import { Button } from '../../button/Button';
import Tooltip from './../../Tooltip/Tooltip';
import classes from './CardBtn.module.css';

const CardBtn = ({ link, tooltip, to, onClick }) => {
	const ButtonOptions = {
		link: (
			<Button purpose='externalLink' href={link} className={classes.button}>
				Check out
			</Button>
		),
		to: (
			<Button purpose='route' href={to} className={classes.button}>
				Check out
			</Button>
		),
		onClick: (
			<Button purpose='button' className={classes.button}>
				Check out
			</Button>
		),
	};

	if (!tooltip) {
		return ButtonOptions[link || to || onClick];
	}

	return (
		<Tooltip className={classes.tooltip} text={tooltip}>
			{ButtonOptions[link || to || onClick]}
		</Tooltip>
	);
};

export default CardBtn;
