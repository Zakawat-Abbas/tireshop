import Layout from '../../layout';
import InfoLinks from '../../components/InfoLinks';
const Info = () => {
	return (
		<Layout>
			<section className='container mx-auto'>
				<h1 className='text-gray-800 text-3xl lg:text-5xl mt-12 text-center lg:text-left mx-4 lg:mx-0'>
					Däck och fälgar på nätet sedan 1998
				</h1>
				<InfoLinks />
			</section>
		</Layout>
	);
};

export default Info;
