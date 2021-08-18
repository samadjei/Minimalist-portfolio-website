import React from 'react';
import Link from 'next/link';
import { Button } from '../button';

const heroInterest = () => {
	return (
		<section className="interest">
			<div className="interest__inner">
				<div className="interest__title">
					<h2>Interested in doing a project together?</h2>
				</div>
				<div className="interest__line"></div>
				<Link href="/contact">
					<Button className="btn" buttonStyle="btn--secondary" buttonSize="btn--desktop">
						Contact Me
					</Button>
				</Link>
			</div>
		</section>
	);
};

export default heroInterest;
