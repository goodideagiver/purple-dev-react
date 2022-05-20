import TagCloudComponent from './../TagCloud/TagCloudComponent';

import classes from './KnownTechnologies.module.css';
import { useState } from 'react';
import Tooltip from './../../../UI/Tooltip/Tooltip';

const KnownTechnologies = ({ styles }) => {
	const [enabled, setEnabled] = useState(true);

	const toggleHandler = () => setEnabled((state) => !state);

	return (
		<div className={styles.cell}>
			<div className={classes.next}>
				<h3>Known Technologies</h3>
				<Tooltip text='Toggle animation'>
					<button onClick={toggleHandler} className={classes.button}>
						Toggle
					</button>
				</Tooltip>
			</div>
			<div
				className={`${styles.technologies} ${styles.cardInnerPadding}`}
			>
				<TagCloudComponent enabled={enabled} />
			</div>
		</div>
	);
};

export default KnownTechnologies;
