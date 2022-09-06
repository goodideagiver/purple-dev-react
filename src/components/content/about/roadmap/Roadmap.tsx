import timeSince from '../../../../helpers/timeSince';
import goals from './data';
import styles from './roadmap.module.css';

type Props = {
	className?: string;
};

const Roadmap = ({ className }: Props) => {
	return (
		<div className={`${className} ${styles.root}`}>
			<h3>Coding since:</h3>
			<ul>
				{goals.map((goal, index) => (
					<li className={styles.item} key={index}>
						<p className={styles.name}>{goal.name}</p>
						<p className={styles.date}>
							{goal.date !== 'TBD' ? timeSince(goal.date) : 'TBD'}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Roadmap;
