import ReactDOM from 'react-dom';
import { Backdrop } from './Backdrop';
import { NavContent } from './NavContent';

const DesktopNavMenu = ({ onMenuClose }) => {
	return ReactDOM.createPortal(
		<>
			<NavContent onMenuClose={onMenuClose} />
			<Backdrop backdropClickHandler={onMenuClose} />
		</>,
		document.getElementById('overlay-root')
	);
};

export default DesktopNavMenu;
