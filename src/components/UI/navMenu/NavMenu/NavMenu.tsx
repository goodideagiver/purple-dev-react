import CSSTransition from 'react-transition-group/CSSTransition';
import DesktopNavMenu from '../desktopNavMenu/DesktopNavMenu';
import styles from './NavMenu.module.css';

type Props {
	show: boolean;
	menuClose: () => void;
}

const NavMenu = ({ menuClose, show }:Props) => {
	return (
		<CSSTransition
			mountOnEnter
			unmountOnExit
			in={show}
			timeout={300}
			classNames={{
				enterActive: styles.open,
				exitActive: styles.closed,
			}}
		>
			<DesktopNavMenu onMenuClose={menuClose} show={show} />
		</CSSTransition>
	);
};

export default NavMenu;
