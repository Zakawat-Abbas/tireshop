const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	const mongoString = "mongodb+srv://zakawatabbas123:V0YyODDy6GdXOASs@tireshop.wcfpwl8.mongodb.net/DB";
	try {
		mongoose.connect(mongoString, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
