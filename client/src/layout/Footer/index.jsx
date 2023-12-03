const Footer = () => {
	return (
		<footer className='bg-custom-red pt-16 pb-10 lg:pb-20 flex justify-center text-white mt-auto'>
			<div className='container lg:px-56 px-4'>
				<div className='flex justify-center mb-12'>
					<img
						src='/img/footer-logo.png'
						className='footer-logo'
						alt='footer logo'
					/>
				</div>
				<div className='flex flex-col mb-12'>
					<p className='text-2xl mb-10 text-center'>
						Däck och fälg på nätet sedan 1998 - Sommardäck, vinterdäck och
						kompletta hjul.
					</p>
					<p className='text-center text-2xl mb-6'>0418-73390</p>
					<p className='text-center text-xl'>info@dackvaruhuset.se</p>
				</div>
				<p className='text-center text-xl mb-11 '>
					Strax utanför Landskrona har vi en däckverkstad och lager på ca
					2000m2. Det är här vi monterar och paketerar de hjul, fälgar och däck
					som vi sedan skickar till våra kunder runt om i Sverige. Här finns
					också vår fälgutställning där alltid ca 100-150 olika fälgmodeller
					finns att se i verkligheten.
				</p>

				<div className='w-full items-center justify-between grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
					<div className='flex flex-col gap-2 justify-center items-center'>
						<h3 className='text-xl'>Däckvaruhuset Molway AB</h3>
						<ul className='flex flex-col gap-1'>
							<li className='text-base'>Verktygsvägen 16</li>
							<li className='text-base'>261 75 Asmundtorp</li>
							<li className='text-base'>Org.nr: 556631-5817</li>
						</ul>
					</div>
					<div className='flex flex-col gap-2 items-center'>
						<h3 className='text-xl'>Telefontider support & butik</h3>
						<ul className='flex flex-col gap-1'>
							<li className='text-base'>Mån - Tor 08.00-17.00</li>
							<li className='text-base'>Fredagar 08.00-15.00</li>
							<li className='text-base'>Lunchstängt 12.00-13.00</li>
						</ul>
					</div>
					<div className='flex flex-col'>{/* <h3></h3> */}</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
