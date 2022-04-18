import Backdrop from '../modalBackdrop/Backrop';
import ModalContent from '../modalContent/ModalContent';

import ReactDOM from 'react-dom';

const Modal = props => {
	return ReactDOM.createPortal(
		<>
			<Backdrop modalCloseHandler={props.modalCloseHandler} />
			<ModalContent
				modalCloseHandler={props.modalCloseHandler}
				title={props.title}
			>
				{props.children}
			</ModalContent>
		</>,
		document.getElementById('overlay-root')
	);
};

export default Modal;
