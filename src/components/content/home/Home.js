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
					<Button>Normal button</Button>
					<Button variant='secondary'>Secondary button</Button>
				</div>
				<div>Slider</div>
			</section>
			<section>
				<header>
					<h2>Projects</h2>
					<p>Here you can find a list of my best projects</p>
				</header>
				<ul>
					<li>Website</li>
					<li>Website</li>
					<li>Website</li>
					<li>Website</li>
					<li>Website</li>
				</ul>
			</section>
		</>
	);
};

export default Home;
