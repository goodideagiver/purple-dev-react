import { useEffect, useState } from 'react';

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
	const [commitDate, setCommitDate] = useState(null);

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
      const timeDiff = new Date().getTime() - existingData.fetchedAt;
      if (timeDiff > 10800000) {
        fetch(commitsFetchUrl + '?per_page=1')
          .then((response) => response.json())
          .then((data) => {
            const lastCommitDate = new Date(data[0].commit.author.date);
            setCommitDate(
              lastCommitDate.toLocaleDateString() +
                ' ' +
                lastCommitDate.toLocaleTimeString()
            );
            updateLocalStorageCommits(commitsFetchUrl, lastCommitDate);
          });
      } else {
        setCommitDate(existingData.date);
      }
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

					setCommitDate(commitDate);
				});
		}
	}, [commitsFetchUrl]);

  return commitDate;
};
