import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
	children: ReactNode;
};

export const Portal = ({ children }: Props) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);

	return mounted
		? createPortal(children, document.querySelector('#overlay-root')!)
		: null;
};

export default Portal;
