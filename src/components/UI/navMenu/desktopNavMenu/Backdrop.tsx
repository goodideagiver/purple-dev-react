import { CSSTransition } from 'react-transition-group';
import styles from './desktopNavMenu.module.css';

type Props = {
	backdropClickHandler: () => void;
	show: boolean;
};

export const Backdrop = ({ backdropClickHandler, show }: Props) => {
	return (
		<CSSTransition
			in={show}
			timeout={300}
			classNames={{
				enterActive: styles['backdrop-show'],
				exitActive: styles['backdrop-hide'],
			}}
		>
			<div onClick={backdropClickHandler} className={styles.backdrop} />
		</CSSTransition>
	);
};
