import Button from '../../UI/button/Button';

import React from 'react';

const Home = props => {
	const showContactHandler = () => props.showContactHandler(2);

	return (
		<>
			<h1>purpleblack.dev</h1>
			<section>
				<div>
					<h2>Why choose me?</h2>
					<ul>
						<li>
							My focus is to make projects as user friendly as
							possible
						</li>
						<li>Problem solving is my passion</li>
						<li>Visual clarity and transparency is my main goal</li>
					</ul>
					<Button onClick={showContactHandler} variant='special'>
						Contact me
					</Button>
					<Button variant='danger'>Delete</Button>
					<Button variant=''>Normal button</Button>
					<Button variant='secondary'>Secondary button</Button>
				</div>
				<div></div>
			</section>
			<section></section>
		</>
	);
};

export default Home;
