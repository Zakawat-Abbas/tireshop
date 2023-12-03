import { useState } from 'react';
import { Link } from 'react-router-dom';
const InfoLinkParent = ({ data }) => {
	const [active, setActive] = useState(false);
	return (
		<li
			key={data.id}
			className='transition-all duration-500 mx-4 lg:mx-0 text-center lg:text-left'
		>
			<h3
				type='text'
				className='text-3xl text-custom-blue cursor-pointer group'
				onClick={(e) => setActive(!active)}
			>
				{data.title}
			</h3>

			<ul
				className={`transition-all duration-500 flex-col gap-2 ml-6 ${
					active ? 'flex' : 'hidden'
				}`}
			>
				{data.list.map((link) => (
					<li key={link.id}>
						<Link
							className='text-base text-custom-blue cursor-pointer transition-all duration-300 hover:text-custom-red'
							to={link.to}
						>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</li>
	);
};

export default InfoLinkParent;
