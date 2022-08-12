export const ArticleSection = ({ sectionName, children }) => {
	return (
		<section>
			<h3>{sectionName}</h3>
			{children}
		</section>
	);
};
