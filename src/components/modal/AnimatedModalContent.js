import ModalContent from '../modalContent/ModalContent';
import { CSSTransition } from 'react-transition-group';
import classes from './Modal.module.css';

export function AnimatedModalContent({
	visible,
	modalCloseHandler,
	title,
	children,
}) {
	return (
		<CSSTransition
			in={visible}
			mountOnEnter
			unmountOnExit
			timeout={300}
			classNames={{ enter: classes.modalEnter, exit: classes.modalExit }}
		>
			<ModalContent modalCloseHandler={modalCloseHandler} title={title}>
				{children}
			</ModalContent>
		</CSSTransition>
	);
}
