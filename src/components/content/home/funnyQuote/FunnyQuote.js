import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

import classes from './FunnyQuote.module.css';

const FunnyQuote = (props) => {
	return (
		<div className={classes.funnyQuote}>
			{/* <p className={classes.comment}>That's about me! 😂</p> */}
			<blockquote className={classes.blockQuote}>
				<div className={classes.quoteTextContainer}>
					<div className={classes.icon}>
						<RiDoubleQuotesL />
					</div>
					<div>
						<p className={classes.quote}>Unga bunga fire!</p>
						<p className={classes.author}>
							- Somebody milion years ago
						</p>
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
