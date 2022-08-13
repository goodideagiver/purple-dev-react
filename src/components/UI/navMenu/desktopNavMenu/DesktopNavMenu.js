import ReactDOM from 'react-dom';
import { Backdrop } from './Backdrop';
import { NavContent } from './NavContent';

const DesktopNavMenu = ({ onMenuClose, show }) => {
	return ReactDOM.createPortal(
		<>
			<NavContent onMenuClose={onMenuClose} />
			<Backdrop backdropClickHandler={onMenuClose} show={show} />
		</>,
		document.getElementById('overlay-root')
	);
};

export default DesktopNavMenu;
