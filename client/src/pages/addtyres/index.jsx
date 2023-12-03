import React, { useState } from 'react';
import axios from 'axios';
import './AddTyre.css';
import { useNavigate } from 'react-router-dom';

const AddTyre = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		description: '',
		price: 0,
		inStock: 0,
		deliveryTime: '',
		label: '',
		imgUrl: '',
		imgUrlLarge: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);

		try {
			await axios.post('https://tireshop-server.onrender.com/addTyre', formData);
			navigate('/');
		} catch (error) {
			console.error('Error adding tyre:', error);
		}
	};

	return (
		<>
			<h1 className="heading">Add Tyre</h1>
			<div className="add-tyre-container">
				<form onSubmit={handleSubmit} className="tyre-form">
					<label>
						Name:
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
						/>
					</label>
					<br />
					<label>
						Description:
						<textarea
							name="description"
							value={formData.description}
							onChange={handleChange}
						/>
					</label>
					<br />
					<label>
						Price:
						<input
							type="number"
							name="price"
							value={formData.price}
							onChange={handleChange}
						/>
					</label>
					<br />
					<label>
						In Stock:
						<input
							type="number"
							name="inStock"
							value={formData.inStock}
							onChange={handleChange}
						/>
					</label>
					<br />
					<label>
						Delivery Time:
						<input
							type="text"
							name="deliveryTime"
							value={formData.deliveryTime}
							onChange={handleChange}
						/>
					</label>
					<br />
					<label>
						Label:
						<input
							type="text"
							name="label"
							value={formData.label}
							onChange={handleChange}
						/>
					</label>
					<br />
					<label>
						Image URL:
						<input
							type="text"
							name="imgUrl"
							value={formData.imgUrl}
							onChange={handleChange}
						/>
					</label>
					<br />
					<label>
						Large Image URL:
						<input
							type="text"
							name="imgUrlLarge"
							value={formData.imgUrlLarge}
							onChange={handleChange}
						/>
					</label>
					<br />
					<button className="addtyre-button" type="submit">Add Tyre</button>
				</form>
			</div>
		</>
	);
};

export default AddTyre;
