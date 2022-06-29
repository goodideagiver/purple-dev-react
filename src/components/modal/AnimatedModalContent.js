import ModalContent from '../modalContent/ModalContent';
import { CSSTransition } from 'react-transition-group';
import transitions from './ModalContent.module.css';

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
			classNames={{
				...transitions,
			}}
		>
			<ModalContent modalCloseHandler={modalCloseHandler} title={title}>
				{children}
			</ModalContent>
		</CSSTransition>
	);
}
