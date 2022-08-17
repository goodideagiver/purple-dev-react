import { motion } from 'framer-motion';

const item = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
	},
};

type AnimateSectionProps = {
	children: React.ReactNode;
};

export const AnimateSection = ({ children }: AnimateSectionProps) => {
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
