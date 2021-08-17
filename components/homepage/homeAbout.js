import React from 'react';
import Link from 'next/link';
import { Button } from '../button';

const homeAbout = () => {
	return (
		<section className="aboutMe">
			<div className="aboutMe__inner">
				<div className="aboutMe__image"></div>
				<div className="aboutMe__content">
					<h2>About Me</h2>
					<p className="body-1">I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
					<Link href="/">
						<Button className="btn hero__btn" buttonStyle="btn--secondary" buttonSize="btn--desktop">
							Go to portfolio
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default homeAbout;
