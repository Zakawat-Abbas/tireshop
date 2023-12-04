import Layout from '../../layout';

import Products from '../../components/Products';
import { useLocation } from 'react-router-dom';

const SingleTyre = () => {
	const location = useLocation();
	const searchResults = location.state?.searchResults || {};

	return (
		<Layout>
			<section>
				<Products searchResults={searchResults} />
			</section>
		</Layout>
	);
};

export default SingleTyre;
