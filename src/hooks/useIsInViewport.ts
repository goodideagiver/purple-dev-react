import { RefObject, useEffect, useMemo, useState } from 'react';

export const useIsInViewport = <T extends HTMLElement>(ref: RefObject<T>) => {
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) =>
			setIsIntersecting(entry.isIntersecting)
		);

		if (!ref.current) return;

		observer.observe(ref.current);

		return () => {
			if (observer && ref) observer.disconnect();
		};
	}, [ref]);

	return isIntersecting;
};
