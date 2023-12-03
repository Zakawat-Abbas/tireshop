const Contact = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form
			action=''
			onSubmit={handleSubmit}
			className='flex flex-col gap-6 mx-4 md:mx-auto lg:mx-autod max-w-md text-xl mt-10'
		>
			<h1 className='text-center bg-slate-700 py-4 px-2 rounded-md text-white text-3xl'>
				Contact us for any query
			</h1>

			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						placeholder='Your name here'
						className='border py-3 px-5 d d'
					/>
				</div>

				<div className='flex flex-col gap-2'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						placeholder='Your email here'
						className='border py-3 px-5 d d'
					/>
				</div>

				<div className='flex flex-col gap-2'>
					<label htmlFor='name'>Name</label>
					<textarea
						type='text'
						placeholder='Your detailed query here'
						className='border py-3 px-5 d d'
					/>
				</div>

				<div className='mb-6 flex'>
					<button
						type='submit'
						className='py-3 px-5 bg-custom-red text-white rounded-md cursor-pointer w-full'
					>
						Submit
					</button>
				</div>
			</div>
		</form>
	);
};

export default Contact;
