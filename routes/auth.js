const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
	// console.log(req.body)
	try {
		const { error } = validate(req.body);
		// console.log(error)
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		// console.log(validPassword)
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		// console.log(user);

		const token = user.generateAuthToken();
		const fullName = user.firstName + ' ' + user.lastName;
		console.log(fullName);
		// res.cookie('token', token);
		// console.log(token);
		res.status(200).send({ data: token, fullName: fullName, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	// console.log(data)
	// console.log(schema)
	// console.log(schema.validate(data))
	return schema.validate(data);
};

module.exports = router;
