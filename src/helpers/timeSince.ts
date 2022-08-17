const addPluralFormEnding = (number: number) => (number > 1 ? 's' : '');

const timeSince = (date: Date) => {
	const dateDiff = +new Date() - +date;

	const seconds = Math.floor(dateDiff / 1000);

	let interval = Math.floor(seconds / 31536000);
	if (interval > 1) {
		return interval + ' year' + addPluralFormEnding(interval);
	}
	interval = Math.floor(seconds / 2592000);
	if (interval > 1) {
		return interval + ' month' + addPluralFormEnding(interval);
	}
	interval = Math.floor(seconds / 86400);
	if (interval > 1) {
		return interval + ' day' + addPluralFormEnding(interval);
	}
	interval = Math.floor(seconds / 3600);
	if (interval > 1) {
		return interval + ' hour' + addPluralFormEnding(interval);
	}
	interval = Math.floor(seconds / 60);
	if (interval > 1) {
		return interval + ' minute' + addPluralFormEnding(interval);
	}
	return Math.floor(seconds) + ' second' + addPluralFormEnding(interval);
};

export default timeSince;
