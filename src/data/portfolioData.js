class PortfolioSquare {
	constructor(title, desc, link, tags = false, img = false, tooltip = false) {
		this.title = title;
		this.desc = desc;
		this.link = link;
		if (tags) {
			this.tags = tags;
		}
		if (img) {
			this.imgURL = img;
		}
		if (tooltip) {
			this.tooltip = tooltip;
		}
	}
}

export const portfolioData = [
	new PortfolioSquare(
		'Adot.pl',
		'Graphic designer website',
		'https://adot.pl/',
		['graphic design', 'website'],
		false,
		'Visit website'
	),
	new PortfolioSquare(
		'Fakeinsta',
		'Fake instagram website',
		'https://github.com/goodideagiver/fakeinsta',
		['javascript', 'object oriented programming', 'pure javascript'],
		false,
		'See code'
	),
	new PortfolioSquare(
		'Polite email builder',
		'Simple JavaScript web app to build fast email templates',
		'https://goodideagiver.github.io/polite-email-builder/',
		['javascript', 'web app', 'frontend']
	),
	new PortfolioSquare(
		'Advanced to do list',
		'Simple to do list with advanced features',
		'https://goodideagiver.github.io/todo-list/',
		['javascript', 'web app', 'frontend']
	),
	new PortfolioSquare(
		'Random palette',
		'Random color palette generator',
		'https://github.com/goodideagiver/palette-generator-prpl'
	),
	new PortfolioSquare(
		'More',
		'See more stuff on my GitHub profile',
		'https://github.com/goodideagiver'
	),
];
