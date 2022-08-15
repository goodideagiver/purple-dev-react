import { useState } from 'react';

import classes from './Foldable.module.css';

import st from '../navButtons/navButtons.module.css';
import { Button } from '../button/Button';

const Foldable = (props) => {
	const [isFolded, setIsFolded] = useState(true);

	const foldToggleButtonHandler = () => {
		setIsFolded((prevFolded) => !prevFolded);
	};

	const foldOnBlurHandler = () => {
		setIsFolded(true);
	};

	return (
		<div onBlur={foldOnBlurHandler}>
			<Button
				purpose='button'
				className={st.button}
				onClick={foldToggleButtonHandler}
			>
				Show {isFolded ? 'more' : 'less'}
			</Button>
			<div
				className={`${isFolded ? classes.folded : ''} ${classes.foldContainer}`}
			>
				{props.children}
			</div>
		</div>
	);
};

export default Foldable;
