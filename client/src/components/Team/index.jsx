import { teamMembeers } from '../../data/teamMembers';

const Team = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-16 justify-between md:mx-4'>
			<LeftSide />
			<RightSide />
		</div>
	);
};

export default Team;

const LeftSide = () => {
	return (
		<div className='flex flex-col gap-3 mx-4 md:mx-0 lg:mx-0 text-center md:text-left lg:text-left'>
			<p className='text-2xl'>
				Har du några frågor, tips eller funderingar är du välkommen att kontakta
				oss.
			</p>
			<article className='text-2xl flex flex-col gap-2'>
				<h3>Telefon</h3>
				<p className='text-custom-blue'>0418-73390</p>
			</article>
			<article className='text-2xl flex flex-col gap-2'>
				<h3>E-post</h3>
				<p className='text-custom-blue'>info@dackvaruhuset.se</p>
			</article>
			<article className='text-2xl flex flex-col gap-2'>
				<h3>Adress</h3>

				<div className='flex flex-col gap-1'>
					<span className='text-sm'>Verktygsvägen 16</span>
					<span className='text-sm'>261 75 Asmundtorp</span>
				</div>
			</article>
			<article className='text-2xl flex flex-col gap-5'>
				<h3>Telefontider support & butik</h3>
				<div className='flex flex-col gap-4'>
					<span className='text-sm'>Verktygsvägen 16</span>
					<span className='text-sm'>261 75 Asmundtorp</span>
					<span className='text-sm'>261 75 Asmundtorp</span>
				</div>
			</article>
		</div>
	);
};

const RightSide = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6  md:justify-self-center md:self-stretch lg:justify-self-center mx-4  lg:mx-0'>
			{teamMembeers.map((member) => (
				<figure key={member.id} className='relative w-full overflow-hidden'>
					<img
						src={member.img}
						alt={`${member.name} - dack`}
						className='w-full md:w-ful md:h-full'
					/>
					<figcaption></figcaption>
				</figure>
			))}
		</div>
	);
};
