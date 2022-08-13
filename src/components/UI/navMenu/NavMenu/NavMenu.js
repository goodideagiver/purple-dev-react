import CSSTransition from 'react-transition-group/CSSTransition';
import DesktopNavMenu from '../desktopNavMenu/DesktopNavMenu';
import styles from './NavMenu.module.css';

const NavMenu = ({ menuClose, show }) => {
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
