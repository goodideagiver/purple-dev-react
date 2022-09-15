import { RefObject } from 'react';
import { useIsInViewport } from '../../../hooks/useIsInViewport';

export const useCardReveal = <T extends HTMLElement>(
	ref: RefObject<T>,
	defaultCss: string,
	cssOutside: string
) => {
	const isVisible = useIsInViewport(ref);

	const cardClass = `${defaultCss} ${!isVisible ? cssOutside : ''}`;

	return cardClass;
};
