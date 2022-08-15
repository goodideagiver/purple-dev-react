import { Button } from '../../button/Button';
import Tooltip from '../../Tooltip/Tooltip';
import classes from './CardBtn.module.css';

type CardBtnProps = {
	link?: string;
	to?: string;
	onClick?: () => void;
	tooltip?: string;
};

const CardBtn = ({ link, tooltip, to, onClick }: CardBtnProps) => {
	let typeOfCardBtn: string = '';

	if (!!link) {
		typeOfCardBtn = 'link';
	} else if (!!onClick) {
		typeOfCardBtn = 'onClick';
	} else if (!!to) {
		typeOfCardBtn = 'to';
	}

	const ButtonOptions: {
		[key: string]: JSX.Element;
	} = {
		link: (
			<Button
				variant='callToAction'
				purpose='externalLink'
				href={link}
				className={classes.button}
			>
				Check out
			</Button>
		),
		to: (
			<Button
				variant='callToAction'
				purpose='route'
				href={to}
				className={classes.button}
			>
				Check out
			</Button>
		),
		onClick: (
			<Button
				variant='callToAction'
				purpose='button'
				className={classes.button}
				onClick={onClick}
			>
				Check out
			</Button>
		),
	};

	if (!tooltip) {
		return ButtonOptions[typeOfCardBtn];
	}

	return (
		<Tooltip className={classes.tooltip} text={tooltip}>
			{ButtonOptions[typeOfCardBtn]}
		</Tooltip>
	);
};

export default CardBtn;
