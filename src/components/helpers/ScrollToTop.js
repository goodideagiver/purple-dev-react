import React, { useEffect, Fragment } from 'react';
import { useLocation, withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }) {
	const location = useLocation();

	useEffect(() => {
		const unlisten = history.listen(() => {
			if (history?.location?.state?.from === 'ProjectCard') return;
			window.scrollTo(0, 0);
		});
		return () => {
			unlisten();
		};
	}, [history, location.pathname]);

	return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
