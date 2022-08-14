import React, { useEffect, Fragment } from 'react';

function ScrollToTop({ history, children }) {
	const location = useRouter();

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
