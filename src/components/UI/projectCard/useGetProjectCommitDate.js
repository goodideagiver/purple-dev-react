import { useEffect } from 'react';

const updateLocalStorageCommits = (url, date) => {
	const localStorageCommits = localStorage.getItem('commits');
  
	const commitsArr = localStorageCommits
		? JSON.parse(localStorageCommits).data
		: [];

	const newCommit = {
		url,
		date: date,
		fetchedAt: new Date().getTime(),
	};
};

const useGetProjectCommitDate = (commitsFetchUrl) => {
	let commitDate = null;

	const localStorageCommits = localStorage.getItem('commits');

	const commitsArr = localStorageCommits
		? JSON.parse(localStorageCommits).data
		: [];

	if (commitsArr.length) {
		const existingData = commitsArr.find(
			(commit) => commit.url === commitsFetchUrl
		);
		//get time diff and if 3 hours passed then fetch new data
		if (existingData && existingData.fetchedAt) {
		}
	}

	useEffect(() => {
		if (commitsFetchUrl) {
			fetch(commitsFetchUrl + '?per_page=1')
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					const lastCommitDate = new Date(data[0].commit.author.date);

					const commitDate =
						lastCommitDate.toLocaleDateString() +
						' ' +
						lastCommitDate.toLocaleTimeString();

					setLastCommitDate(commitDate);
				});
		}
	}, [commitsFetchUrl]);
};
