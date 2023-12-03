import SearchWrapper from './SearchWrapper';

import './custom-search-animate.css';
const Search = ({ onClose, onSubmit }) => {
	const handlePrevent = (e) => {
		e.stopPropagation();
	};
	return (
		<SearchWrapper onClick={onClose}>
			<div
				onClick={handlePrevent}
				className='bg-custom-red rounded-lg absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[300px] md:w-[400px] lg:w-[500px] h-[600px]'
			>
				<form action='' onSubmit={onSubmit}>
					<input
						type='text'
						placeholder='Search here...'
						className=' text-2xl w-4/5 bubble py-3 px-4 border-2 rounded-lg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white'
					/>
				</form>
			</div>
		</SearchWrapper>
	);
};

export default Search;
