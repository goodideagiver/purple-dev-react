import Backdrop from '../modalBackdrop/Backrop';
import ModalContent from '../modalContent/ModalContent';

import ReactDOM from 'react-dom';

const Modal = props => {
	return ReactDOM.createPortal(
		<>
			<ModalContent
				modalCloseHandler={props.modalCloseHandler}
				title={props.title}
			>
				{props.children}
			</ModalContent>
			<Backdrop modalCloseHandler={props.modalCloseHandler} />
		</>,
		document.getElementById('overlay-root')
	);
};

export default Modal;
