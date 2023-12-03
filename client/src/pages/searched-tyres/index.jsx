import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import Layout from '../../layout';

import Products from '../../components/Products';

import { tyres } from '../../data/tyres';
const SingleTyre = () => {
	const [numOfTyres, setNumOfTyres] = useState(1);
	const { id } = useParams();

	const [tyre, setTyre] = useState(true);

	const addToCart = () => {
		let existingCart = null;
		if (localStorage.getItem('cart')) {
			existingCart = JSON.parse(localStorage.getItem('cart'));

			if (existingCart.find((item) => item.id === +id)) {
				existingCart.map((item) => {
					if (item.id === +id) {
						item.count = item.count + parseInt(numOfTyres);
					}
					return item;
				});
			} else {
				existingCart.push({
					...tyre,
					count: +numOfTyres,
				});
			}

			localStorage.setItem('cart', JSON.stringify(existingCart));

			// total items
		}
	};

	useEffect(() => {
		const foundTyre = tyres.find((tyre) => tyre.id === +id);

		setTyre(foundTyre);
	}, []);

	return (
		<Layout>
			<section>
				<Products />
			</section>
		</Layout>
	);
};

export default SingleTyre;
