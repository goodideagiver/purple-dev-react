import { useEffect, useState } from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import getRandomQuote from './data';

import classes from './FunnyQuote.module.css';

const FunnyQuote = () => {
	const [quoteObj, setQuoteObj] = useState({ quote: '', author: '' });

	useEffect(() => {
		const quoteObj = getRandomQuote();
		setQuoteObj(quoteObj);
	}, []);

	return (
		<div className={classes.funnyQuote}>
			<blockquote className={classes.blockQuote}>
				<div className={classes.quoteTextContainer}>
					<div className={classes.icon}>
						<RiDoubleQuotesL />
					</div>
					<div>
						<p className={classes.quote}>{quoteObj.quote}</p>
						<p className={classes.author}>- {quoteObj.author}</p>
					</div>
					<div className={classes.icon}>
						<RiDoubleQuotesR />
					</div>
				</div>
			</blockquote>
		</div>
	);
};

export default FunnyQuote;
