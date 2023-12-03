import Layout from '../../layout';
import Team from '../../components/Team';

import ContactForm from '../../components/ContactForm';
const Contact = () => {
	return (
		<Layout>
			<section className='container mx-auto mt-5'>
				<h1 className='text-xl py-6 bg-gray-200 rounded-md text-center mx-4 md:mx-0 lg:mx-0'>
					Kontakta Däckvaruhuset
				</h1>

				<Team />
				<h1 className='text-xl py-6 bg-gray-200 rounded-md text-center mx-4 md:mx-0 lg:mx-0 mb-5'>
					Kontakta Däckvaruhuset
				</h1>

				<ContactForm />
			</section>
		</Layout>
	);
};

export default Contact;
