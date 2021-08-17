import React from 'react';
import Link from 'next/link';
import { Button } from '../button';

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero__inner">
				<h1 className="hero--title">Hey, I’m Alex Spencer and I love building beautiful websites</h1>
				<div className="hero__cta">
					<div className="btn__icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
							<g fill="none" fill-rule="evenodd" stroke="#5FB4A2">
								<path d="M0 9l8 4 8-4" />
								<path opacity=".5" d="M0 5l8 4 8-4" />
								<path opacity=".25" d="M0 1l8 4 8-4" />
							</g>
						</svg>
					</div>
					<Link href="/">
						<Button className="btn hero__btn" buttonStyle="btn--primary" buttonSize="btn--hero">
							About Me
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
