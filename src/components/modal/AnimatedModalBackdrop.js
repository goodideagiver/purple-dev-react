import Backdrop from '../modalBackdrop/Backrop';
import { CSSTransition } from 'react-transition-group';
import transitions from './Backdrop.module.css';

export function AnimatedModalBackdrop({ visible, modalCloseHandler }) {
	return (
		<CSSTransition
			in={visible}
			mountOnEnter
			unmountOnExit
			timeout={300}
			classNames={{ ...transitions }}
		>
			<Backdrop modalCloseHandler={modalCloseHandler} />
		</CSSTransition>
	);
}
