import styles from './Tooltip.module.css';

const Tooltip = ({ text = 'default tooltip text', children, className }) => {
	return (
		<div className={`${styles.tooltip} ${className ? className : ''}`}>
			{children}
			<p className={styles.text}>{text}</p>
		</div>
	);
};

export default Tooltip;
