import { useState } from 'react';

const portfolioItems = (props) => {
	const items = [
		{ name: 'Manage', body: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.', img: 'public/images/portfolio/desktop/image-portfolio-manage@2x.jpg', id: 1 },

		{ name: 'Bookmark', body: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.' ,id: 2 },
		{ name: 'Insure', body: 'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.' ,id: 3 },
		{ name: 'Fylo', body: 'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.' ,id: 4 },
	];
	return (
		<div>
			{items.map((portfolio) => {
				<div className="projects" key={}>

				</div>
			})}
		</div>
	);
};

export default portfolioItems;
