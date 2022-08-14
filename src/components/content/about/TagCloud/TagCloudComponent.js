import { useRef, useEffect } from 'react';

import styles from './TagsStyle.module.css';
import TagCloud from 'TagCloud';

const TagCloudComponent = ({ enabled }) => {
	const knownTechnologies = [
		'axios',
		'CSS',
		'Git',
		'HTML',
		'JavaScript',
		'NPM',
		'Parcel',
		'PS',
		'React',
		'Redux',
		'SCSS',
		'SQL',
		'TypeScript',
		'VS Code',
		'Jest',
		'React Transition Group',
		'React testing library',
	];

	const tagDiv = useRef(null);

	useEffect(() => {
		if (enabled) {
			const tagCloud = new TagCloud(tagDiv.current, knownTechnologies, {
				maxSpeed: 'slow',
				initSpeed: 'slow',
				keep: false,
				containerClass: styles['tag-width'],
				radius: '150',
				direction: Math.floor(Math.random() * 720 - 360),
			});
			return () => {
				tagCloud.destroy();
			};
		}
	}, [enabled]);

	if (!enabled) {
		return (
			<ul className={styles['list-style']}>
				{knownTechnologies.map((el) => (
					<li key={el}>{el}</li>
				))}
			</ul>
		);
	}

	return <div className={styles['tag-container']} ref={tagDiv} />;
};

export default TagCloudComponent;
