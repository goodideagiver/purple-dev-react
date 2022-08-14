import styles from './content.module.css';

export const Content = ({ children }) => {
	return <main className={styles.root}>{children}</main>;
};
