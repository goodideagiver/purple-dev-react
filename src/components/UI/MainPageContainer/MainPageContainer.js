import styles from './MainPageContainer.module.css';

export const MainPageContainer = ({ children }) => {
	return (
		<div className={[styles.maxWidth, styles.sectionAppear].join(' ')}>
			{children}
		</div>
	);
};
