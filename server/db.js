const mongoose = require('mongoose');

module.exports = () => {
	const db = mongoose.connect('mongodb://localhost:27017/next-express', {
		useUnifiedTopology: true,
		useNewUrlParser: true
	})
	return db;
}