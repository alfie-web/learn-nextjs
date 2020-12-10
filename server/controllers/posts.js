const { PostModel } = require('../models');

class PostsController {
	getAll = (req, res) => {
		PostModel.find()
			.then(posts => {
				res.json({
					status: 'success',
					data: posts
				})
			})
			.catch(e => res.status(400).json({
				status: 'error'
			}))
	}

	getById = async (req, res) => {
		try {
			const findedPost = await PostModel.findById(req.params.id);

			res.json({
				status: 'success',
				data: findedPost
			})
		} catch(e) {
			res.status(400).json({
				status: 'error'
			})
		}
	}

	create = async (req, res) => {
		const newPost = await new PostModel({
			title: req.body.title,
			content: req.body.content
		})

		await newPost.save()

		res.json({
			status: 'success',
			data: newPost
		})
	}

}

module.exports = PostsController