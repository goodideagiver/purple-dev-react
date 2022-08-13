import { motion } from 'framer-motion';

const item = {
	hidden: { opacity: 0, scale: 0.95, y: 50 },
	visible: {
		y: 0,
		opacity: 1,
		scale: 1,
	},
};

export const AnimateSection = ({ children }) => {
	return (
		<motion.section
			transition={{
				type: 'spring',
				stiffness: 50,
				damping: 15,
			}}
			variants={item}
		>
			{children}
		</motion.section>
	);
};
