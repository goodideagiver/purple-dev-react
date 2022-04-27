import { useState } from 'react';

import Button from '../../../UI/button/Button';
import classes from './EmploymentHistory.module.css';

import Modal from '../../../modal/Modal';

const EmploymentHistory = ({ className }) => {
	const [modalVisible, setModalVisible] = useState(false);

	const showModalHandler = () => setModalVisible(true);
	const hideModalHandler = () => setModalVisible(false);

	return (
		<div className={`${classes.history} ${className}`}>
			<h3>Past career</h3>
			<Button onClick={showModalHandler}>See employment history</Button>
			{modalVisible && (
				<Modal
					modalCloseHandler={hideModalHandler}
					title='You can be the first company to hire me'
				>
					<img
						className={classes['man-pointing']}
						alt='man pointing finger'
						src='https://upload.wikimedia.org/wikipedia/commons/f/f3/Uncle_Sam_(pointing_finger).jpg'
					/>
				</Modal>
			)}
		</div>
	);
};

export default EmploymentHistory;
