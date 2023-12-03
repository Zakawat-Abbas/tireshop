import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const BASE_URL = process.env.BASE_URL;

import Product from '../Product/index.jsx';
const Products = () => {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchProjects() {
			try {
				axios.get(`${BASE_URL}/getproducts`)
					.then((res) => {
						console.log(res.data)
						setProducts(res.data);
					}).catch((err) => {
						alert('Failed to fetch products.');
						console.error('Failed to fetch products.', err);
					});

			} catch (error) {
				console.error('Error fetching products:', error);
			}
		}

		fetchProjects();
	}, []);

	const addtyres = () => {
		navigate('/addtyre');
	}
	return (
		<section className='py-24 md:px-4'>

			<h2 className='text-center mb-6 text-2xl text-gray-700'>Däck Topp 8</h2>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-9'>

				{products.map((p) => (
					<Link key={p._id} to={`/tyres/${p._id}`}>
						<Product tyre={p} key={p._id} />
					</Link>
				))}
				<button className="addtyre mb-6 text-2xl" onClick={addtyres}>+ Add Tyre</button>

			</div>

		</section>
	);
};

export default Products;
