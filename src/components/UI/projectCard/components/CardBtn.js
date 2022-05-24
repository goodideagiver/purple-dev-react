import Button from './../../button/Button';
import Tooltip from './../../Tooltip/Tooltip';
import classes from './CardBtn.module.css'

const CardBtn = ({link,tooltip}) => {
  return (
		<Tooltip className={classes.tooltip} text={tooltip}>
			<Button
				link={link}
				className={classes.button}
				variant='callToAction'
			>
				Check out
			</Button>
		</Tooltip>
  );
}

export default CardBtn