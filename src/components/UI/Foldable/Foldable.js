import { useState } from 'react';
import Button from '../button/Button';

import classes from './Foldable.module.css';

import st from '../navButtons/navButtons.module.css';

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
			<Button className={st.button} onClick={foldToggleButtonHandler}>
				Show {isFolded ? 'more' : 'less'}
			</Button>
			<div
				className={`${isFolded ? classes.folded : ''} ${
					classes.foldContainer
				}`}
			>
				{props.children}
			</div>
		</div>
	);
};

export default Foldable;
