import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

const Post = ({ post }) => {
	const [state, setState] = useState(post);	// Сохранаю в локальный стейт, в отличии от постов
	const router = useRouter();

	useEffect(async () => {
		if (!post) {
			// const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${router.query.id}`)
			const { data } = await axios.get(`http://localhost:3002/posts/${router.query.id}`);
			setState(data.data)
		}
	}, [post])
	
	return (
		<div>
			<div>
				{ state ? 
					<div>{state.title}</div>
					: <div>Loadingggg</div>
				}
			</div>

			<Link href="/posts"><a>All posts</a></Link>
		</div>
	)
}

Post.getInitialProps = async ({ req, query }) => {
	if (!req) {
		return {
			post: null
		}
	}

	// const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
	const { data } = await axios.get(`http://localhost:3002/posts/${query.id}`);

	return {
		post: data.data
	}
}

export default Post;







// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import axios from 'axios';

// const Post = ({ post }) => {
// 	return (
// 		<div>
// 			<div>
// 				{ post ? 
// 					<div>{post.title}</div>
// 					: <div>Loadingggg</div>
// 				}
// 			</div>

// 			<Link href="/"><a>All posts</a></Link>
// 		</div>
// 	)
// }

// Post.getInitialProps = async ({ req, query }) => {
// 	const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)

// 	return {
// 		post: data
// 	}
// }

// export default Post;