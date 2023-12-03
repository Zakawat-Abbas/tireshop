import { Link } from 'react-router-dom';
import { links } from '../../data/infoLinks';

// import { useState } from 'react';

import InfoLinkParent from '../InfoLinkParent';
const InfoLinks = () => {
	// const [active, setActive] = useState(false);
	return (
		<ul className='flex flex-col gap-3 pt-6 mb-12'>
			{links.map((parent) => {
				return <InfoLinkParent key={parent.key} InfoLinkParent data={parent} />;
			})}
		</ul>
	);
};

export default InfoLinks;
