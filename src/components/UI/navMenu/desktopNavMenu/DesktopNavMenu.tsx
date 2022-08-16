import Portal from '../../../../../HOC/Portal';
import { Backdrop } from './Backdrop';
import { NavContent } from './NavContent';

type Props = {
	onMenuClose: () => void;
	show: boolean;
};

const DesktopNavMenu = ({ onMenuClose, show }: Props) => (
	<Portal>
		<NavContent onMenuClose={onMenuClose} />
		<Backdrop backdropClickHandler={onMenuClose} show={show} />
	</Portal>
);

export default DesktopNavMenu;
