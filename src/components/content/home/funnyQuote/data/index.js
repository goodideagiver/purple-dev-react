const quotes = [
	{
		quote: 'Whatever you are, be a good one.',
		author: 'Abraham Lincoln',
	},
	{
		quote: 'Talk is cheap. Show me the code.',
		author: 'Linus Torvalds',
	},
	{
		quote: `If you're familiar with Redux, you already know how this works.`,
		author: 'React documentation - useReducer',
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

const getRandomQuote = () => quotes[parseInt(Math.random() * quotes.length)];

export default getRandomQuote;
