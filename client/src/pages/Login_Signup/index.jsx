import { useState } from "react";
import axios from "axios";
import './Login_Signup.css';

const Login_Signup = () => {
	const [loginData, setLoginData] = useState({ email: "", password: "" });
	const [registerData, setRegisterData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const [isSignup, setIsSignup] = useState(false);

	const handleLoginChange = ({ currentTarget: input }) => {
		setLoginData({ ...loginData, [input.name]: input.value });
	};

	const handleRegisterChange = ({ currentTarget: input }) => {
		setRegisterData({ ...registerData, [input.name]: input.value });
	};

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `https://tireshop-server.onrender.com/api/auth`;
			const { data: { data: token, fullName, message } } = await axios.post(url, loginData);
			localStorage.setItem("token", token);
			localStorage.setItem("fullName", fullName);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
	const handleRegisterSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `https://tireshop-server.onrender.com/api/users`;
			const { data: res } = await axios.post(url, registerData);
			setIsSignup(false);
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	const toggleSignup = () => {
		setIsSignup(true);
	};

	const toggleLogin = () => {
		setIsSignup(false);
	};

	return (
		<div class="form-modal">

			<div class="form-toggle">
				<button
					id="login-toggle"
					onClick={toggleLogin}
					style={{
						backgroundColor: isSignup ? "#fff" : "#772229",
						color: isSignup ? "#222" : "#fff",
					}}
				>
					Log In
				</button>
				<button
					id="signup-toggle"
					onClick={toggleSignup}
					style={{
						backgroundColor: isSignup ? "#772229" : "#fff",
						color: isSignup ? "#fff" : "#222",
					}}
				>
					Sign Up
				</button>
			</div>

			<div id="login-form" style={{ display: isSignup ? "none" : "block" }}>
				<form onSubmit={handleLoginSubmit}>
					<input
						type="email"
						placeholder="Email"
						name="email"
						onChange={handleLoginChange}
						value={loginData.email}
						required
						className='input'
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						onChange={handleLoginChange}
						value={loginData.password}
						required
						className='input'
					/>
					{error && <div className='error_msg'>{error}</div>}
					<button type="submit" className='btn login'>
						Log In
					</button>
					<hr />

				</form>
			</div>

			<div id="signup-form" style={{ display: isSignup ? "block" : "none" }}>
				<form onSubmit={handleRegisterSubmit}>
					<input
						type="text"
						placeholder="First Name"
						name="firstName"
						onChange={handleRegisterChange}
						value={registerData.firstName}
						required
						className='input'
					/>
					<input
						type="text"
						placeholder="Last Name"
						name="lastName"
						onChange={handleRegisterChange}
						value={registerData.lastName}
						required
						className='input'
					/>
					<input
						type="email"
						placeholder="Email"
						name="email"
						onChange={handleRegisterChange}
						value={registerData.email}
						required
						className='input'
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						onChange={handleRegisterChange}
						value={registerData.password}
						required
						className='input'
					/>
					{error && <div className='error_msg'>{error}</div>}
					<button type="submit" className='btn signup'>
						Sign Up
					</button>
					<hr />

				</form>
			</div>

		</div>
	);
};

export default Login_Signup;
