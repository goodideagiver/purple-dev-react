import styles from './modalContent.module.css';

import { GrClose } from 'react-icons/gr';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { Button } from '../UI/button/Button';
import { ReactNode } from 'react';

type Props = {
	modalCloseHandler: () => void;
	title: string;
	children: ReactNode;
	className?: string;
};

const ModalContent = ({
	title,
	modalCloseHandler,
	className,
	children,
}: Props) => {
	const contentCssClasses = `${styles.content} ${
		className ? className : ''
	} acrylic`;

	useLockBodyScroll();

	return (
		<div className={contentCssClasses}>
			<header className={styles.header}>
				<h2>{title}</h2>
				<Button
					variant='danger'
					onClick={modalCloseHandler}
					className={styles.close}
					purpose='button'
				>
					<GrClose />
				</Button>
			</header>
			<main className={styles.children}>{children}</main>
		</div>
	);
};

export default ModalContent;
