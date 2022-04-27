import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

import classes from './FunnyQuote.module.css';

const FunnyQuote = (props) => {
	return (
		<div className={classes.funnyQuote}>
			<blockquote className={classes.blockQuote}>
				<div className={classes.quoteTextContainer}>
					<div className={classes.icon}>
						<RiDoubleQuotesL />
					</div>

					<p className={classes.quote}>
						Hire a lazy person to do a difficult job. Because a lazy
						person will find an easy way to finish the job.
					</p>
					<div className={classes.icon}>
						<RiDoubleQuotesR />
					</div>
				</div>

				<p>- Bill Gates</p>
			</blockquote>
			<p className={classes.comment}>That's about me! 😂</p>
		</div>
	);
};

export default FunnyQuote;
