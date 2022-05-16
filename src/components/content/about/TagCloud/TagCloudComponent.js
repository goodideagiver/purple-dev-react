import { useRef, useEffect } from 'react';

import './TagsStyle.css';
import TagCloud from 'TagCloud';

const TagCloudComponent = ({ enabled }) => {
	const knownTechnologies = [
		'JavaScript',
		'React',
		'Redux',
		'Parcel',
		'Git',
		'Sass',
		'PS',
		'NPM',
		'VS Code',
		'axios',
		'HTML',
		'CSS',
	];

	const tagDiv = useRef(null);

	useEffect(() => {
		if (enabled) {
			const tagCloud = new TagCloud(tagDiv.current, knownTechnologies, {
				maxSpeed: 'slow',
				keep: false,
				containerClass: 'tag-width',
				radius: '150',
			});
			return () => {
				tagCloud.destroy();
			};
		}
	}, [enabled]);

	if (!enabled) {
		return (
			<ul className='list-style'>
				{knownTechnologies.map((el) => (
					<li key={el}>{el}</li>
				))}
			</ul>
		);
	}

	return <div className='tag-container' ref={tagDiv} />;
};

export default TagCloudComponent;
