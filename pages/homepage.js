import React from 'react';
import Hero from '../components/homepage/hero';
import HeroInterest from '../components/Interest';
import HomeAbout from '../components/homepage/homeAbout';

const Homepage = () => {
	return (
		<main className="container">
			<Hero />
			<HomeAbout />
			<HeroInterest/>
		</main>
	);
};

export default Homepage;
