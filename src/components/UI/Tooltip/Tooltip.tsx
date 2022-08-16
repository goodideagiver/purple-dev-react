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
	const tooltipClasses = `${styles.tooltip} ${className ? className : ''}`;

	return (
		<div className={tooltipClasses}>
			{children}
			<p className={styles.text}>{text}</p>
		</div>
	);
};

export default Tooltip;
