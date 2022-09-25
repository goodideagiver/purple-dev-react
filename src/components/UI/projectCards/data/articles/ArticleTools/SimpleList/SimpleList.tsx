import classes from './SimpleList.module.css';

type Props = {
	children: React.ReactNode;
};
export const SimpleList = ({ children }: Props) => {
	return <ul className={classes.list}>{children}</ul>;
};
