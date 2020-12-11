import axios from 'axios';
import * as types from '../types';

const postsActions = {
	setPosts: ({ docs, page, hasNextPage, totalDocs, totalPages }) => ({
		type: types.GET_POSTS,
		payload: {
			posts: docs,
			currentPage: page,
			totalPages,
			hasNextPage,
			totalDocs
		}
	}),

	fetchPosts: () => async dispatch => {
		// async request to server (axios)
		// const postsData = ['post1', 'post 2']
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
		// console.log('data', data)

		return dispatch(postsActions.setPosts(data))

		// return data
	}
}

export default postsActions;

