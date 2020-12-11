const { PostModel } = require('../models');

class PostsController {
	getAll = async (req, res) => {
		console.log('query', req.query)
		const { page } = req.query;

		try {
			const findedPosts = await PostModel.paginate({}, {
				page,
				limit: 3,
			})

			res.json({
				status: 'success',
				data: findedPosts
			})

		} catch(e) {
			res.status(400).json({
				status: 'error'
			})
		}

		// PostModel.find()
		// 	.then(posts => {
		// 		res.json({
		// 			status: 'success',
		// 			data: posts
		// 		})
		// 	})
		// 	.catch(e => res.status(400).json({
		// 		status: 'error'
		// 	}))
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