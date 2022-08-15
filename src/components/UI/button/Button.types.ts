import React from 'react';

type Variants = 'special' | 'danger' | 'nav' | 'callToAction' | 'glow';

type Purpose = 'route' | 'button' | 'externalLink';

export interface UniversalButtonProps {
	children: React.ReactNode | string;
	className?: string;
	variant?: Variants;
	onClick?: () => void;
	href?: string;
	purpose: Purpose;
}
