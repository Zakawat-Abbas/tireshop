import { useNavigate } from 'react-router-dom';

const Hero = () => {
	const navigate = useNavigate();
	const widthArray = [];
	const profileArray = [];
	const inchArray = [];

	const tyreTypes = [
		{ value: 'Summer Wheels' },
		{ value: 'Studded winter tyres' },
		{ value: 'Winter tyres unstudded' },
	];

	for (let i = 125; i <= 355; i += 15) {
		widthArray.push({ value: i });
	}
	widthArray.push({ value: 'OFF ROAD' });

	for (let i = 20; i <= 85; i += 5) {
		profileArray.push({ value: i });
	}
	for (let i = 10; i <= 26; i++) {
		inchArray.push({ value: i });
	}

	console.log(profileArray);

	const handleSubmit = (e) => {
		e.preventDefault();

		navigate('/tyres/search');
	};

	return (
		<section className='hero bg-hero bg-no-repeat bg-cover py-24'>
			<div className='block justify-center items-center max-w-[345px] w-[100%] mx-auto'>
				<div>
					<button
						type='button'
						className=' animate-move-down text-white w-1/2 mx-auto mb-5 flex items-center justify-center py-3 px-4 bg-custom-gray-800 justify-self-center cursor-pointer transition-all duration-500 hover:shadow-gray-800 hover:-translate-y-1 hover:fill-custom-red'
					>
						Däcksök
					</button>
					<form
						action='/submit'
						onSubmit={handleSubmit}
						className='flex flex-col gap-3 animate-move-up w-full'
					>
						<select
							type='text'
							name=''
							placeholder='Välj bredd'
							className='rounded-md border py-2 px-4 bg-white text-2xl w-full'
							id=''
							required
						>
							<option value='selct' disabled selected>
								Select width
							</option>

							{widthArray.map((item) => (
								<option value={item.value} key={item.value}>
									{item.value}
								</option>
							))}
						</select>
						<select
							type='text'
							name=''
							placeholder='Välj bredd'
							className='rounded-md border py-2 px-4 bg-white text-2xl w-full'
							id=''
							required={true}
						>
							<option value='selct' disabled selected>
								Select profile
							</option>

							{profileArray.map((item) => (
								<option value={item.value} key={item.value}>
									{item.value}
								</option>
							))}
						</select>
						<select
							type='text'
							name=''
							placeholder='Välj bredd'
							className='rounded-md border py-2 px-4 bg-white text-2xl w-full'
							id=''
							required
						>
							<option value='selct' disabled selected>
								Choose inch size
							</option>

							{inchArray.map((item) => (
								<option value={item.value} key={item.value}>
									{item.value}
								</option>
							))}
						</select>
						<select
							type='text'
							name=''
							placeholder='Välj bredd'
							className='rounded-md border py-2 px-4 bg-white text-2xl w-full'
							id=''
							required
						>
							<option value='selct' disabled selected>
								Select tyre type
							</option>

							{tyreTypes.map((item) => (
								<option value={item.value} key={item.value}>
									{item.value}
								</option>
							))}
						</select>

						<button
							type='submit'
							className='duration-500 hover:shadow-custom-red w-1/3 mx-auto flex justify-center py-2 px-3 text-2xl bg-custom-red text-white cursor-pointer rounded-md mt-5 transition-all'
						>
							sök
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Hero;
