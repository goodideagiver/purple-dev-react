import styles from './modal.module.css';

import Backdrop from '../modalBackdrop/Backrop';
import ModalContent from '../modalContent/ModalContent';

import ReactDOM from 'react-dom';

const Modal = props => {
	return ReactDOM.createPortal(
		<div className={styles.modal}>
			<ModalContent title={props.title}>{props.children}</ModalContent>
			<Backdrop />
		</div>,
		document.getElementById('overlay-root')
	);
};

export default Modal;
