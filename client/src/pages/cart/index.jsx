import Layout from '../../layout';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Cart = () => {

	const [order, setOrder] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalCartPrice, setTotalCartPrice] = useState(0);
	const [taxPrice, setTaxPrice] = useState(4788);

	useEffect(() => {
		axios.get(`https://tireshop-server.onrender.com/getorders`)
			.then((res) => {
				setOrder(res.data)
				calculateTotalPrice(res.data);
			}).catch((err) => {
				alert('Failed to fetch orders.');
				console.error('Failed to fetch orders.', err);
			});
	}, []);

	const calculateTotalPrice = (orders) => {
		let total = 0;
		orders.forEach((order) => {
			order.orderItems.forEach((item) => {
				total += item.price * item.qty;
			});
		});
		setTotalPrice(total);

	};



	const handleDeleteItem = async (orderIndex, itemIndex) => {
		try {
			const orderId = order[orderIndex]._id;
			const updatedOrder = [...order];
			updatedOrder[orderIndex].orderItems.splice(itemIndex, 1);
			setOrder(updatedOrder);
			calculateTotalPrice(updatedOrder);
			await axios.delete(`https://tireshop-server.onrender.com/deleteItem/${orderId}`);
		} catch (error) {
			console.error('Failed to delete item:', error);
		}
	};





	return (
		<Layout>
			<section>
				<div className='container mx-4 md:mx-auto lg:mx-auto'>
					<h1 className='py-2 text-center border-b text-xl font-medium'>
						Your Shopping Cart
					</h1>
					<ul className='flex flex-col gap-3 mb-5 pt-5 pb-5 border-b'>
						{order.map((orders, orderIndex) => (
							orders.orderItems.map((item, itemIndex) => (
								<li
									key={item.id}
									className='flex 
              flex-col md:flex-row md:justify-between'
								>
									<div className='flex items-center gap-2'>
										<div className='max-w-[80px]'>
											<img src={item.image} alt='' />
										</div>
										<h3>{item.name}</h3>
									</div>
									<div className='flex items-center justify-center'>
										<p>SEK {item.price}</p>
									</div>

									<div className='flex items-center justify-content'>
										<p className='mr-4'><strong>{item.qty} Pieces</strong></p>
										<button onClick={() => handleDeleteItem(orderIndex, itemIndex)}>
											<img src='/img/delete.png' alt='remove item' />
										</button>
									</div>
								</li>
							))))}
					</ul>

					<ul className='flex flex-col gap-1 text-base w-full overflow-hidden mb-5'>
						<li className='flex items-center justify-between'>
							<span>Total ex. VAT</span>
							<span>SEK {totalPrice}</span>
						</li>
						<li className='flex items-center justify-between'>
							<span>VAT</span>
							<span>SEK {taxPrice}</span>
						</li>
						<li className='flex items-center justify-between'>
							<span>Shipping</span>
							<span>SEK 0</span>
						</li>
					</ul>

					<p className='flex items-center font-extrabold text-lg bg-gray-300 p-5 justify-between mb-10'>
						<span>To pay</span>
						<span>SEK {totalPrice + taxPrice}</span>
					</p>
					<div className='mb-10'>
						<label
							htmlFor='choose-delivery'
							className='text-xl font-medium text-center block mb-2'
						>
							Choose Delivery
						</label>

						<div className='flex items-center justify-between gap-1'>
							<button className='bg-gray-700 w-full py-2 px-3 cursor-pointer rounded-md text-white'>
								Delivery to me
							</button>
							<button className='bg-gray-700 w-full py-2 px-3 cursor-pointer rounded-md text-white'>
								Delivery to assembly parnter
							</button>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Cart;
