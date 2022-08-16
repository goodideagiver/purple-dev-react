type Goal = { name: String; date: Date | 'TBD' };

const goals: Goal[] = [
	{ name: 'HTML + CSS', date: new Date(2021, 9, 10) },
	{ name: 'JavaScript', date: new Date(2022, 0, 7) },
	{ name: 'React', date: new Date(2022, 3, 6) },
	{ name: 'TypeScript', date: new Date(2022, 5, 13) },
	{ name: 'Next.js', date: 'TBD' },
];

export default goals;
