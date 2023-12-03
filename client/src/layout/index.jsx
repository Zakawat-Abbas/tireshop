import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<main className='flex flex-col min-h-screen'>
			<Header />
			{children}
			<Footer />
		</main>
	);
};

export default Layout;
