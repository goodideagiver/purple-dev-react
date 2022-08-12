import classes from './ArticleTechnologies.module.css';

export const ArticleTechnologies = ({ technologiesArray }) => {
	return (
		<section>
			<h3>⚙️ Technologies</h3>
			<ul className={classes.list}>
				{technologiesArray.map((technology, index) => (
					<li
						style={{ animationDelay: index / 10 + 's' }}
						className={`${classes.item} acrylic`}
						key={index}
					>
						<span>{technology}</span>
					</li>
				))}
			</ul>
		</section>
	);
};
