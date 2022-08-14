import Portal from '../../../HOC/Portal';

import { AnimatedModalBackdrop } from './AnimatedModalBackdrop';
import { AnimatedModalContent } from './AnimatedModalContent';

/**
 * @param {string} title
 * @param children
 * @param {function} modalCloseHandler
 */
const Modal = ({ visible, modalCloseHandler, title, children }) => (
	<Portal>
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
	</Portal>
);

export default Modal;
