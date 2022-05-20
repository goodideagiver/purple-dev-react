import styles from './Tooltip.module.css';

const Tooltip = ({ text = 'default tooltip text', children }) => {
	return (
		<div className={styles.tooltip}>
			{children}
			<p className={styles.text}>{text}</p>
		</div>
	);
};

export default Tooltip;
