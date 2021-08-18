import React from 'react';
import Interest from '../components/Interest';
import Projects from '../components/portfolio/portfolio';

const Portfolio = () => {
	return (
		<main className="container">
			<Projects />
			<Interest />
		</main>
	);
};

export default Portfolio;
