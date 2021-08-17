import Image from 'next/image';
import Link from 'next/link';
import { Component } from 'react';

class Navbar extends Component {
	state = { clicked: false };
	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};
	render() {
		return (
			<header className="navbar">
				<div className="navbar__logo">
					<Link href="/">
						<Image src="/logo.svg" alt="Minimalist logo" width={60.08} height={32} />
					</Link>
				</div>
				<div onClick={this.handleClick}>
					<i className={this.state.clicked ? 'fas fa-times active' : 'fas fa-bars'}></i>
				</div>
				<ul className={this.state.clicked ? 'navbar__links active' : 'navbar__links'}>
					<Link href="/">
						<a className="navbar--items">Home</a>
					</Link>
					<Link href="/portfolio">
						<a className="navbar--items">Portfolio</a>
					</Link>
					<Link href="/contact">
						<a className="navbar--items">Contact Me</a>
					</Link>
				</ul>
			</header>
		);
	}
}

export default Navbar;
