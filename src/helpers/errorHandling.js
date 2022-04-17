export const emptyProperty = propertyName => {
	throw new Error(
		`Property of name ${propertyName} cannot be empty in order for this component to work`
	);
};
