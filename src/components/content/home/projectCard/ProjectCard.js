import React from 'react';

const ProjectCard = props => {
	return (
		<li>
			<h2>{props.title}</h2>
			<p>{props.desc}</p>
			{props.tags.length && (
				<ul>
					{props.tags.map(tag => (
						<li></li>
					))}
				</ul>
			)}
		</li>
	);
};

export default ProjectCard;
