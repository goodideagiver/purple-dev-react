import ModalContent from '../modalContent/ModalContent';
import { CSSTransition } from 'react-transition-group';
import transitions from './ModalContent.module.css';
import { ReactNode } from 'react';

type Props = {
	visible: boolean;
	modalCloseHandler: () => void;
	title: string;
	children: ReactNode;
	className?: string;
};

export function AnimatedModalContent({
	visible,
	modalCloseHandler,
	title,
	children,
	className,
}: Props) {
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
			<ModalContent
				modalCloseHandler={modalCloseHandler}
				title={title}
				className={className}
			>
				{children}
			</ModalContent>
		</CSSTransition>
	);
}
