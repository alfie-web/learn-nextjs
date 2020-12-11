const { Schema, model, models } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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

schema.plugin(mongoosePaginate);

module.exports = models.Post || model('Post', schema);