import timeSince from '../../../../helpers/timeSince'
import classes from './RoadmapGoal.module.css'

import { useState, useEffect } from 'react'
import { Goal } from './data'

type Props = {
	goal: Goal
}
export const RoadmapGoal = ({ goal }: Props) => {
	const [learningTime, setLearningTime] = useState(
		goal.date === 'TBD' ? 'TBD' : timeSince(goal.date)
	)

	useEffect(() => {
		let interval: null | NodeJS.Timer = null
		if (goal.date !== 'TBD') {
			interval = setInterval(() => {
				goal.date !== 'TBD' && setLearningTime(timeSince(goal.date))
			}, 10000)
		}

		return () => {
			interval && clearInterval(interval)
		}
	}, [goal.date])

	return (
		<li className={classes.item}>
			<p className={classes.name}>{goal.name}</p>
			<p className={classes.date}>{learningTime}</p>
		</li>
	)
}
