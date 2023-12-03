import Layout from '../../layout';

const Profile = () => {
	const userName = localStorage.getItem("fullName");
	return (
		<Layout>
			<section>
				<div className='container mx-4 md:mx-auto'>
					<h1 className='text-2xl font-extrabold text-center'>Hi, {userName}</h1>
				</div>
			</section>
		</Layout>
	);
};

export default Profile;
