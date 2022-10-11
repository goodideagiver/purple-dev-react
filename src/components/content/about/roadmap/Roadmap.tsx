import goals from './data'
import styles from './roadmap.module.css'
import { RoadmapGoal } from './RoadmapGoal'

type Props = {
	className?: string
}

const Roadmap = ({ className }: Props) => {
	return (
		<div className={`${className} ${styles.root}`}>
			<h3>Coding since:</h3>
			<ul>
				{goals.map((goal, index) => (
					<RoadmapGoal key={goal.name + index.toString()} goal={goal} />
				))}
			</ul>
		</div>
	)
}

export default Roadmap
