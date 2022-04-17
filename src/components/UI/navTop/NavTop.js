import styles from './navTop.module.css';

const NavTop = props => {
	return (
		<nav className={styles.nav}>
			{props.navButtons.map(button => (
				<button
					key={button.name}
					className={styles.button}
					onClick={button.callback}
				>
					{button.name}
				</button>
			))}
		</nav>
	);
};

export default NavTop;
