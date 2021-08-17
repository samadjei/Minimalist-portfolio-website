import Navbar from './navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Frontend Mentor | Minimalist Portfolio</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				{/* Google Font  */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;700&family=Public+Sans&display=swap" rel="stylesheet" />
				{/* Font Awesome */}
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
			</Head>
			<div>
				<Navbar />
				{children}
			</div>
		</>
	);
};

export default Layout;
