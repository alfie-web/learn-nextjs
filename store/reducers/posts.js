import * as types from '../types';

const initialState = {
	posts: [],
	currentPost: null,
	isFetching: false,
	error: null
}

const postsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.GET_POSTS:
			return {
				...state,
				posts: payload,
				isFetching: false,
				error: null
			}

		default: return state;
	}
}

export default postsReducer;