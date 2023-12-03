import Layout from '../../layout';

import Hero from '../../components/Hero';
import FeaturesStrip from '../../components/FeaturesStrip';
import Products from '../../components/Products';
const Home = () => {
	return (
		<Layout>
			<Hero />
			<FeaturesStrip />
			<Products />
		</Layout>
	);
};

export default Home;
