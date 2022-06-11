import Backdrop from '../modalBackdrop/Backrop';
import ModalContent from '../modalContent/ModalContent';

import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import classes from './Modal.module.css';

const Modal = ({ visible, modalCloseHandler, title, children }) => {
	return ReactDOM.createPortal(
		<>
			<AnimatedModalBackdrop
				visible={visible}
				modalCloseHandler={modalCloseHandler}
			/>
			<AnimatedModalContent
				visible={visible}
				children={children}
				title={title}
				modalCloseHandler={modalCloseHandler}
			/>
		</>,
		document.getElementById('overlay-root')
	);
};

export default Modal;

function AnimatedModalContent({ visible, modalCloseHandler, title, children }) {
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

function AnimatedModalBackdrop({ visible, modalCloseHandler }) {
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
