import { useEffect, useState } from 'react';

export const useMediaQuery = (rule) => {
	const [matches, setMatches] = useState(
		typeof window !== 'undefined' ? window.matchMedia(rule).matches : null
	);

	useEffect(() => {
		try {
			const mediaQueryList = window.matchMedia(rule);
			const listener = () => setMatches(mediaQueryList.matches);
			mediaQueryList.addEventListener('change', listener);
			return () => mediaQueryList.removeEventListener('change', listener);
		} catch (error) {
			setMatches(true);
		}
	}, [rule]);
	return matches;
};
