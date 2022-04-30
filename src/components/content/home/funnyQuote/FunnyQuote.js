import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import getRandomQuote from './data';

import classes from './FunnyQuote.module.css';

const FunnyQuote = () => {
	const { quote, author } = getRandomQuote();

	return (
		<div className={classes.funnyQuote}>
			<blockquote className={classes.blockQuote}>
				<div className={classes.quoteTextContainer}>
					<div className={classes.icon}>
						<RiDoubleQuotesL />
					</div>
					<div>
						<p className={classes.quote}>{quote}</p>
						<p className={classes.author}>- {author}</p>
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
