// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Link from 'next/link';

// const Posts = ({ items }) => {
// 	// const [data, setData] = useState(items);

// 	const dispatch = useDispatch();
// 	const { posts } = useSelector(state => state.posts);

// 	console.log('posts', posts)

// 	// useEffect(() => {

// 	// })

// 	return (
// 		<div className="Posts">
// 			{/* { items && items.length && */}
// 			{ posts.length &&
// 				posts.map(post => (
// 					<div className="Post" key={post.id}>
// 						<Link href="/post/[id]" as={`/post/${post.id}`}><a>{post.title}</a></Link>
// 					</div>
// 				))
// 			}
// 		</div>
// 	)
// }

// export default Posts





















import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import Pagination from './Pagination';

const Posts = ({ items }) => {
	// const [data, setData] = useState(items);

	const dispatch = useDispatch();
	const { posts } = useSelector(state => state.posts);

	console.log('posts', posts)

	// useEffect(() => {

	// })

	return (
		<div className="Posts">
			{ !posts.length && items.length ?
				// Первый рендер для SEO
				items.map(post => (
					<div className="Post" key={post._id}>
						<Link href="/post/[id]" as={`/post/${post._id}`}><a>{post.title}</a></Link>
					</div>
				))
				// <div>Loading</div>
				: <>
					<span>Redux</span>
					{
						posts.map(post => (
							<div className="Post" key={post._id}>
								<Link href="/post/[id]" as={`/post/${post._id}`}><a>{post.title}</a></Link>
							</div>
						))
					}
				</>
			}

			<Pagination 
			
			/>
		</div>
	)
}

export default Posts
