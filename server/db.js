const mongoose = require("mongoose");
const DATABASE = process.env.DATABASE;

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	const mongoString = `${DATABASE}`;
	try {
		mongoose.connect(mongoString, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
