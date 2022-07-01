import ReactDOM from 'react-dom/client';

export const AwesomeModal = ({ children }) => {
	return ReactDOM.createPortal(
		<div>{children}</div>,
		document.getElementById('overlay-root')
	);
};
