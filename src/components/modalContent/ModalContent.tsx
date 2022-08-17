import styles from './modalContent.module.css';

import { IoMdClose } from 'react-icons/io';
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
	const contentCssClasses = `${styles.content} ${className ? className : ''} `;

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
					<IoMdClose />
				</Button>
			</header>
			<main className={styles.children}>{children}</main>
		</div>
	);
};

export default ModalContent;
