import ReactDOM from 'react-dom';

import { AnimatedModalBackdrop } from './AnimatedModalBackdrop';
import { AnimatedModalContent } from './AnimatedModalContent';

/**
 * @param {string} title
 * @param children
 * @param {function} modalCloseHandler
 */
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
