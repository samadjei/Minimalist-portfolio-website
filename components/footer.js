import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const footer = () => {
	return (
		<footer className="footer">
			<div className="footer__inner container">
				<div className="footer__left">
					<div className="footer__logo">
						<Link href="/">
							<Image src="/logo-footer.svg" alt="Minimalist logo" width={60.08} height={32} />
						</Link>
					</div>
					<ul className="footer__nav">
						<Link href="/">
							<li>
								<a className="footer--items">Home</a>
							</li>
						</Link>
						<Link href="/portfolio">
							<li>
								<a className="footer--items">Portfolio</a>
							</li>
						</Link>
						<Link href="/contact">
							<li>
								<a className="footer--items">Contact Me</a>
							</li>
						</Link>
					</ul>
				</div>
				<div className="footer__right">
					<Image src="/images/icons/github.svg" alt="Minimalist logo" width={25} height={24} />
					<Image src="/images/icons/twitter.svg" alt="Minimalist logo" width={25} height={19.5} />
					<Image src="/images/icons/linkedin.svg" alt="Minimalist logo" width={24} height={24} />
				</div>
			</div>
		</footer>
	);
};

export default footer;
