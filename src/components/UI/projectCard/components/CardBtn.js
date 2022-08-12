import Button from './../../button/Button';
import Tooltip from './../../Tooltip/Tooltip';
import classes from './CardBtn.module.css';

const CardBtn = ({ link, tooltip, to, onClick }) => {
	if (!tooltip) {
		return (
			<Button link={link} route={to} onClick={onClick} className={classes.btn}>
				Check out
			</Button>
		);
	}

	return (
		<Tooltip className={classes.tooltip} text={tooltip}>
			<Button
				onClick={onClick}
				route={to}
				link={link}
				className={classes.button}
				variant='callToAction'
			>
				Check out
			</Button>
		</Tooltip>
	);
};

export default CardBtn;
