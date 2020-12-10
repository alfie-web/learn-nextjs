const { Schema, model, models } = require('mongoose');

const schema = new Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String
	},
	likes: {
		type: Number,
		default: 0
	}
	// author
}, {
	timestamps: true
})

module.exports = models.Post || model('Post', schema);