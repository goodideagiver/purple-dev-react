import React, { ButtonHTMLAttributes } from 'react';

type Variants =
	| 'special'
	| 'danger'
	| 'nav'
	| 'callToAction'
	| 'glow'
	| 'secondary';

type Purpose = 'route' | 'button' | 'externalLink';

export interface UniversalButtonProps {
	children: React.ReactNode | string;
	className?: string;
	variant?: Variants;
	onClick?: () => void;
	href?: string;
	purpose: Purpose;
	style?: React.CSSProperties;
}
