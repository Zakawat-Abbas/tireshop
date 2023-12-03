import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const BASE_URL = process.env.BASE_URL;

const Product = ({ tyre }) => {
	const [quantity, setQuantity] = useState(1);

	const handleBuyClick = async () => {
		const orderData = {
			user: tyre._id,
			orderItems: [
				{
					image: tyre.imgUrl,
					name: tyre.name,
					price: tyre.price,
					qty: Number(quantity),
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
				}).catch((err) => {
					alert('Failed to place order.');
					console.error('Failed to place order.', err);
				});

		} catch (error) {
			console.error('Error placing order:', error);
		}


	};
	const navigate = useNavigate();
	return (
		<figure className='flex flex-col text-gray-800 group border rounded-md overflow-hidden cursor-pointer'>
			<div className='relative text-center overflow-hidden'>
				<div className='flex justify-center'>
					<img src={tyre.imgUrl} className='tyre-img' alt='the img' />
				</div>
				<label
					htmlFor='tyre-img'
					className='max-w-[250px] absolute left-1/2 top-[100%]  -translate-x-1/2 block group-hover:top-[72%]  translate-y[-100%] transition-all duration-300 items-center  mx-auto py-2 px-3 text-lg font-extrabold bg-red-700 text-white'
				>
					{tyre.label}
				</label>
			</div>
			<figcaption className='flex flex-col p-5'>
				<h2 className='text-gray-800 text-sm mb-8 text-center'>{tyre.name}</h2>
				<p className='flex flex-col gap-1 text-xs '>
					<span>Externt lager: {tyre.inStock}+ st.</span>
					<span className='py-1 border-t-2 border-b-2'>
						Leveranstid: {tyre.deliveryTime}
					</span>
				</p>
				<p className='text-center text-lg text-gray-900 mb-3 mt-3'>
					{tyre.price} kr/st
				</p>

				<div
					className='flex items-stretch border-gray-300 text-sm   rounded-lg'
					onClick={(e) => {
						e.preventDefault();
					}}
				>
					<label
						htmlFor=''
						id='tyre-count'
						className='w-1/6 bg-gray-200 py-3 text-center border rounded-l-lg rounded-bl-lg'
					>
						Antal:
					</label>
					<input
						type='number'
						id='tyre-count'
						className='w-4/6 py-3 px-4 text-base border focus:outline-none'
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
					/>
					<button
						// onClick={(e) => {
						// 	e.preventDefault();
						// 	navigate('/cart');
						// }}
						onClick={handleBuyClick}
						className='w-1/6 rounded-tr-lg rounded-br-lg cursor-pointer bg-green-700 py-3 text-center border border-green-700'
					>
						Köp
					</button>
				</div>
			</figcaption>
		</figure>
	);
};

export default Product;
