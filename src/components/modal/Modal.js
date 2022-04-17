import styles from './modal.module.css';

import Backdrop from '../modalBackdrop/Backrop';
import ModalContent from '../modalContent/ModalContent';

import ReactDOM from 'react-dom';

const Modal = props => {
	return ReactDOM.createPortal(
		<div className={styles.modal}>
			<ModalContent
				modalCloseHandler={props.modalCloseHandler}
				title={props.title}
			>
				{props.children}
			</ModalContent>
			<Backdrop modalCloseHandler={props.modalCloseHandler} />
		</div>,
		document.getElementById('overlay-root')
	);
};

export default Modal;
