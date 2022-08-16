import { ReactNode } from 'react';
import styles from './Tooltip.module.css';

type Props = {
	text: string;
	children: ReactNode;
	className?: string;
};

const Tooltip = ({
	text = 'default tooltip text',
	children,
	className,
}: Props) => {
	return (
		<div className={`${styles.tooltip} ${className ? className : ''}`}>
			{children}
			<p className={styles.text}>{text}</p>
		</div>
	);
};

export default Tooltip;
