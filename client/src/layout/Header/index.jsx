import { useState } from 'react';
import axios from 'axios';

import { NavLink, useNavigate } from 'react-router-dom';

import Search from '../../components/Search';
import './header.css'

import { routes } from '../../routes';
const Header = (props) => {
	const [toggleSearch, setToggleSearch] = useState(false);
	const navigate = useNavigate();
	const [mobileNav, setMobileNav] = useState(false);
	const [token, setToken] = useState(localStorage.getItem('token'));
	let defaultClasses =
		'hover:text-custom-red active:text-custom-red text-base cursor-pointer transition-all duration-300 text-gray-800';

	const handleSearchSubmit = async (e) => {
		e.preventDefault();
		const searchApiUrl = 'https://tireshop-server.onrender.com/api/search';

		try {
			const searchTerm = document.getElementById('searchInput').value;

			const response = await axios.get(searchApiUrl, {
				params: { q: searchTerm },
			});

			const searchResults = response.data.results;
			console.log('Search results:', searchResults);
			navigate('/tyres/search', { state: { searchResults } });
		} catch (error) {
			console.error('Error during search:', error);
		}

		setToggleSearch(false);
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("fullName");
		window.location.reload();
	};

	return (
		<header
			className={`header bg-white py-4  relative mb-8 ${mobileNav ? 'shadow-md' : 'shadow-sm'
				}`}
		>
			{toggleSearch && (
				<Search
					onClose={() => setToggleSearch(false)}
					onSubmit={handleSearchSubmit}
				/>
			)}
			<button
				className='flex flex-col gap-1 cursor-pointer w-[30px] absolute left-4 top-6 md:hidden lg:hidden'
				onClick={() => setMobileNav(!mobileNav)}
			>
				<span className='w-full h-1 bg-black rounded-xl'></span>
				<span className='w-full h-1 bg-black rounded-xl'></span>
				<span className='w-full h-1 bg-black rounded-xl'></span>
			</button>
			<nav className='flex items-center justify-between container mx-auto md:items-start lg:items-center md:px-4 flex-col md:flex-row pt-16 md:pt-0 lg:pt-0'>
				<ul
					className={`lg:flex items-center gap-11 md:flex-col lg:flex-row  flex-col justify-center z-20 ${mobileNav ? '' : 'hidden'
						}`}
				>
					{routes.map((route) => (
						<li
							key={route.id}
							className='text-center md:text-left lg:text-left'
						>
							<NavLink
								className={({ isActive, isPending }) =>
									isPending
										? 'pending'
										: isActive
											? defaultClasses + ' text-custom-red'
											: defaultClasses
								}
								to={route.to}
							>
								{route.title}
							</NavLink>
						</li>
					))}
				</ul>
				<p className='absolute z-10  top-4 md:top-5 right-4 md:left-1/2 md:-translate-x-1/2   text-4xl font-extrabold md:text-center'>
					Däckcentralen
				</p>
				<ul
					className={`items-center z-20  gap-9 lg:flex md:flex  justify-center mt-4 md:mt-0 lg:mt-0  pt-3 md:pt-0 lg:pt-0 mx-4 md:border-none lg:border-none w-full md:w-auto lg:w-auto ${mobileNav ? '' : 'hidden'
						}`}
				>
					<li className='text-center md:text-left lg:text-left'>
						<button
							className='cursor-pointer border-none bg-search w-11 h-11 bg-no-repeat bg-cover'
							onClick={() => setToggleSearch(true)}
						></button>
					</li>
					<li className='text-center md:text-left lg:text-left'>
						<button
							className='cursor-pointer border-none bg-cart w-11 h-11 bg-no-repeat bg-cover'
							onClick={() => navigate('/cart')}
						></button>
					</li>
					<li className='text-center md:text-left lg:text-left'>
						<button
							className='cursor-pointer border-none bg-user w-11 h-11 bg-no-repeat bg-cover'
							onClick={() => navigate('/profile')}
						></button>
					</li>
					<li className='text-center md:text-left lg:text-left'>
						{token ? (
							<button
								className='cursor-pointer'
								onClick={handleLogout}
							>Logout</button>
						) : (
							<button ></button>
						)}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

