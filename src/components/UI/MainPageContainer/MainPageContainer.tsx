import { ReactNode } from 'react';
import styles from './MainPageContainer.module.css';

type Props = {
	children: ReactNode;
};

export const MainPageContainer = ({ children }: Props) => {
	return (
		<div className={[styles.maxWidth, styles.sectionAppear].join(' ')}>
			{children}
		</div>
	);
};
