import ReactDOM from 'react-dom';
import Portal from '../../../../../HOC/Portal';
import { Backdrop } from './Backdrop';
import { NavContent } from './NavContent';

const DesktopNavMenu = ({ onMenuClose, show }) => (
	<Portal>
		<NavContent onMenuClose={onMenuClose} />
		<Backdrop backdropClickHandler={onMenuClose} show={show} />
	</Portal>
);

export default DesktopNavMenu;
