import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import classes from './TopMessage.module.css';

type Props = {
	duration?: number;
	transition?: number;
	onHide?: () => void;
};

const TopMessage = ({
	duration = 1000,
	transition = 0.5,
	onHide,
	...props
}: Props) => {
	const [hidden, sethidden] = useState(false);

	useEffect(() => {
		const transitionDelay = setTimeout(() => {
			sethidden(true);
		}, duration);
		const hide = setTimeout(() => {
			onHide();
		}, duration + transition * 100);
		return () => {
			clearTimeout(hide);
			clearTimeout(transitionDelay);
		};
	}, [duration, hidden, transition, onHide]);

	return ReactDOM.createPortal(
		<div
			style={{
				transitionDuration: transition + 's',
				animationDuration: transition + 's',
			}}
			className={`${classes.wrapper} ${hidden ? classes.hide : ''}`}
		>
			<div className={classes.topMessage}>{props.children}</div>
		</div>,
		document.getElementById('overlay-root')
	);
};

export default TopMessage;
