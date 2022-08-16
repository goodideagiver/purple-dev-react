import Portal from '../../../HOC/Portal';

import { AnimatedModalBackdrop } from './AnimatedModalBackdrop';
import { AnimatedModalContent } from './AnimatedModalContent';

/**
 * @param {string} title
 * @param children
 * @param {function} modalCloseHandler
 */

type ModalProps = {
	visible: boolean;
	modalCloseHandler: () => void;
	title: string;
	children: React.ReactNode;
	className?: string;
};

const Modal = ({
	visible,
	modalCloseHandler,
	title,
	children,
	className,
}: ModalProps) => (
	<Portal>
		<AnimatedModalBackdrop
			visible={visible}
			modalCloseHandler={modalCloseHandler}
		/>
		<AnimatedModalContent
			className={className}
			visible={visible}
			children={children}
			title={title}
			modalCloseHandler={modalCloseHandler}
		/>
	</Portal>
);

export default Modal;
