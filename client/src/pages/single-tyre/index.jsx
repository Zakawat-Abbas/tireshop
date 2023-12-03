import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../layout';
import { useNavigate } from 'react-router-dom';
const BASE_URL = process.env.BASE_URL;

import axios from 'axios';
const SingleTyre = () => {
	const [numOfTyres, setNumOfTyres] = useState(1);
	const [product, setProduct] = useState(null);
	const navigate = useNavigate();
	const { id } = useParams();

	const [tyre, setTyre] = useState(null);

	useEffect(() => {
		axios.get(`${BASE_URL}/products/${id}`)
			.then((response) => {
				console.log(response.data);
				setTyre(response.data);
			})
			.catch((error) => {
				console.error('Error fetching product:', error);
			});
	}, [id]);


	const handleBuyClick = async () => {
		const orderData = {
			user: tyre._id,
			orderItems: [
				{
					image: tyre.imgUrl,
					name: tyre.name,
					price: tyre.price,
					qty: Number(numOfTyres),
					product: tyre._id,
				},
			],
		};

		console.log(orderData);

		try {
			axios.post(`${BASE_URL}/createorders`, orderData)
				.then((res) => {
					console.log(res.data)
					navigate('/cart');
					// setProducts(res.data);
				}).catch((err) => {
					alert('Failed to place order.');
					console.error('Failed to place order.', err);
				});

		} catch (error) {
			console.error('Error placing order:', error);
		}
	};

	if (tyre) {
		return (
			<Layout>
				<article className='mx-4 md:mx-auto lg:mx-auto container'>
					<div className='w-full object-cover bg-no-repeat flex justify-center'>
						<img src={tyre.imgUrlLarge} alt='' />
					</div>
					<h1 className='text-2xl text-center font-extrabold pb-3 border-b mb-2'>
						{tyre.name}
					</h1>

					<p className='text-base font-medium mb-2 text-center'>
						{tyre.description}
					</p>

					<p className='font-extrabold text-lg mb-4 text-center'>
						SEK {tyre.price}
					</p>

					<div className='flex items-center w-full mb-6 max-w-sm mx-auto md:ml-0 lg:mx-auto md:mx-auto '>
						<input
							type='number'
							className='w-4/5 p-2 border font-medium'
							onChange={(e) => setNumOfTyres(+e.target.value)}
							value={numOfTyres}
						/>
						<input
							type='button'
							onClick={handleBuyClick}
							className='bg-green-700 font-medium cursor-pointer w-1/5 text-white border p-2 rounded-r-md rounded-b-md'
							value='Buy'
						/>
					</div>
				</article>
			</Layout>
		);
	} else {
		return (
			<Layout>
				<h1>Loading...</h1>
				<p></p>
			</Layout>
		);
	}
};

export default SingleTyre;
