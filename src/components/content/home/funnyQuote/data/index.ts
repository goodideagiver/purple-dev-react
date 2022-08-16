type Quote = {
	quote: string;
	author: string;
};

const quotes: Quote[] = [
	{
		quote: 'Whatever you are, be a good one.',
		author: 'Abraham Lincoln',
	},
	{
		quote: 'Talk is cheap. Show me the code.',
		author: 'Linus Torvalds',
	},
	{
		quote: `Let's see if it breaks...`,
		author: 'Me',
	},
	{
		quote: `You never fail until you stop trying.`,
		author: 'Albert Einstein ',
	},
];

const getRandomQuotesIndex = (): number =>
	parseInt((Math.random() * quotes.length).toString());

const getRandomQuote = () => quotes[getRandomQuotesIndex()];

export default getRandomQuote;
