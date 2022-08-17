import Backdrop from '../modalBackdrop/Backrop';
import { CSSTransition } from 'react-transition-group';
import transitions from './Backdrop.module.css';

type Props = {
	visible: boolean;
	modalCloseHandler: () => void;
};

export const AnimatedModalBackdrop = ({
	visible,
	modalCloseHandler,
}: Props) => {
	return (
		<CSSTransition
			in={visible}
			mountOnEnter
			unmountOnExit
			timeout={300}
			classNames={{ ...transitions }}
		>
			<Backdrop modalCloseHandler={modalCloseHandler} />
		</CSSTransition>
	);
};
