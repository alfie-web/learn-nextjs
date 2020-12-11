import * as types from '../types';

const initialState = {
	posts: [],
	currentPost: null,
	isFetching: false,
	error: null,
	hasNextPage: false,
	totalDocs: 0,
	currentPage: 1,
	totalPages: 0
}

const postsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.GET_POSTS:
			return {
				...state,
				posts: payload.posts,
				hasNextPage: payload.hasNextPage,
				totalDocs: payload.totalDocs,
				currentPage: payload.currentPage,
				totalPages: payload.totalPages,
				isFetching: false,
				error: null
			}

		default: return state;
	}
}

export default postsReducer;