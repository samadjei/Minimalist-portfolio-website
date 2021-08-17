import React from 'react';
import Hero from '../components/homepage/hero';
import HomeAbout from '../components/homepage/homeAbout';

const Homepage = () => {
	return (
		<main className="container">
			<Hero />
			<HomeAbout />
		</main>
	);
};

export default Homepage;
