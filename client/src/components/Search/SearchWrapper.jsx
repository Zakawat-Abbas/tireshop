import './custom-search-animate.css';

const SearchWrapper = ({ children, onClick }) => {
	return (
		<div
			className='custom-bg fixed left-0 right-0 bottom-0 top-0 z-50'
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default SearchWrapper;
