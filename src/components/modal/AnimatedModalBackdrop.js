import Backdrop from '../modalBackdrop/Backrop';
import { CSSTransition } from 'react-transition-group';
import classes from './Modal.module.css';

export function AnimatedModalBackdrop({ visible, modalCloseHandler }) {
	return (
		<CSSTransition
			in={visible}
			mountOnEnter
			unmountOnExit
			timeout={300}
			classNames={{ enter: classes.backdropEnter, exit: classes.backdropExit }}
		>
			<Backdrop modalCloseHandler={modalCloseHandler} />
		</CSSTransition>
	);
}
