import Button from '../../../UI/button/Button';
import ImgSmoothLoad from '../../../UI/ImgSmoothLoad/ImgSmoothLoad';
import Modal from '../../../modal/Modal';
import classes from './EmploymentHistory.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EmploymentHistory = ({ className }) => {
	const [modalVisible, setModalVisible] = useState(false);

	const showModalHandler = () => setModalVisible(true);
	const hideModalHandler = () => setModalVisible(false);

	return (
		<div className={`${classes.history} ${className}`}>
			<h3>Past career</h3>
			<Button onClick={showModalHandler}>See employment history</Button>
			<Modal
				visible={modalVisible}
				modalCloseHandler={hideModalHandler}
				title='You can be the first company to hire me'
			>
				<ImgSmoothLoad
					className={classes['man-pointing']}
					alt='man pointing finger'
					src='https://upload.wikimedia.org/wikipedia/commons/f/f3/Uncle_Sam_(pointing_finger).jpg'
				/>
				<Link className={classes.link} to='/contact'>
					Contact me
				</Link>
			</Modal>
		</div>
	);
};

export default EmploymentHistory;
