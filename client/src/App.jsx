import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Info from './pages/info';
import CustomerServices from './pages/customer-services';
import Deck from './pages/deck';
import Contact from './pages/contact';
import SingleTyre from './pages/single-tyre';
import SearchedTyres from './pages/searched-tyres';
import Cart from './pages/cart';
import Profile from './pages/profile';
import AddTyre from './pages/addtyres';

import Login from "./pages/login";
import Signup from "./pages/singup";
function App() {
	return (

		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/tyres/:id' element={<SingleTyre />} />
				<Route path='/tyres/search' element={<SearchedTyres />} />
				<Route path='/info' element={<Info />} />
				<Route path='/customer-services' element={<CustomerServices />} />
				<Route path='/deck' element={<Deck />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/addtyre' element={<AddTyre />} />
				<Route path="/signup" exact element={<Signup />} />
				<Route path="/login" exact element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;


{/* <BrowserRouter>
			<Routes> */}
{/* <Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/tyres/:id' element={<SingleTyre />} />
				<Route path='/tyres/search' element={<SearchedTyres />} />
				<Route path='/info' element={<Info />} />
				<Route path='/customer-services' element={<CustomerServices />} />
				<Route path='/deck' element={<Deck />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/profile' element={<Profile />} /> */}

{/* {user && <Route path="/" exact element={<Main />} />}
				<Route path="/signup" exact element={<Signup />} />
				<Route path="/login" exact element={<Login />} />
				<Route path="/" element={<Navigate replace to="/login" />} /> */}
{/* </Routes>

		</BrowserRouter>
		// <Routes>
		// 	{user && <Route path="/" exact element={<Main />} />}
		// 	<Route path="/signup" exact element={<Signup />} />
		// 	<Route path="/login" exact element={<Login />} />
		// 	<Route path="/" element={<Navigate replace to="/login" />} />
		// </Routes> */}