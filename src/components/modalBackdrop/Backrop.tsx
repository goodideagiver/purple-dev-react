import { MouseEvent } from 'react';
import styles from './backdrop.module.css';

type Props = {
	modalCloseHandler: () => void;
};

const Backdrop = ({ modalCloseHandler }: Props) => {
	const backdropClickHandler = (e: MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLDivElement;

		if (target.className === styles.backdrop) {
			modalCloseHandler();
		}
	};

	return <div onClick={backdropClickHandler} className={styles.backdrop} />;
};

export default Backdrop;
