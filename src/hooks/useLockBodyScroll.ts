import { useEffect } from 'react';

export const useLockBodyScroll = () => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = '';
		};
	}, []);
};
