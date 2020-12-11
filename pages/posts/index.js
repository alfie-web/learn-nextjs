import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import Head from 'next/head'
import {useRouter} from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/Home.module.css'
import { postsActions } from '../../store/actions';
import Posts from '../../components/Posts';
// import getQueryParams from '../../helpers/getQueryParams';

// let { page } = getQueryParams();

// Вот теперь всё работает правильно 
// При первом рендере посты статичные (SSR), не из Redux
// Но так как dispatch(postsActions.setPosts(posts));	
// Происходит rerender, и посты уже в store
// А Posts вытаскивает их из store

// На самом деле, так запариваться может и не надо
// Ибо даже в этом кейсе redux лишний
// Ибо динамика сдесь не нужна, а если делать пагинацию, локального стейта вполне хватит
// А редактирование постов будет в админке (а это уже другое приложение, без SEO)
// Поэтому это очень редкий кейс, но зато store как в SPA

export default function Home({ postsData }) {
	const dispatch = useDispatch();
	const { posts: reduxPosts } = useSelector(state => state.posts);
	const { query: { page } } = useRouter();
	// let { page } = getQueryParams();

	console.log('RENDERS', page)

	// useEffect(async () => {
	// 	!reduxPosts.length && console.log('Mount')

	// 	// TODO: Сделать какой-нибудь setPage
	// 	// Пихать не только посты, но и инфу о пагинации
	// 	// Сделать компонент пагинации
	// 	// Страницу хранить в url-e
	// 	!reduxPosts.length && dispatch(postsActions.setPosts(postsData));	

	// }, [dispatch])

	useEffect(async () => {
		console.log('page changed', page)
		// !reduxPosts.length && console.log('Mount')
		dispatch(postsActions.setPosts(postsData));	
	}, [page, postsData])


	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

					<Posts 
						items={postsData.docs}
					/>


			</main>
		</div>
	)
}


Home.getInitialProps = async ({ query: { page = 1 } }) => {	// в контексте можно найти текущие параметры (например id)

	const { data } = await axios.get(`http://localhost:3002/posts?page=${page}`);
	console.log('data', data)
	return {
		postsData: data.data
	}
}

// Эта штука работает исключительно на сервере
// Также здесь можно работать с БД напрямую
// export async function getServerSideProps({ query: { page = 1 } }) {
// 	console.log('calls once on server?')
// 	// const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_page=7&_limit=10');

// 	const { data } = await axios.get(`http://localhost:3002/posts?page=${page}`);
// 	console.log('data', data)
// 	return {
// 		props: {
// 			postsData: data.data
// 		}
// 	}
// }
















// import React, { useEffect } from 'react';
// import axios from 'axios';
// import Head from 'next/head'
// import Link from 'next/link'
// import { useDispatch, useSelector } from 'react-redux';
// import styles from '../styles/Home.module.css'
// import { postsActions } from '../store/actions';

// export default function Home({ posts }) {	 // посты приходят с сервера
// 	const dispatch = useDispatch();

// 	// const postsRedux = useSelector(state => state.posts.posts);
// 	// console.log('postsRedux', postsRedux)

// 	useEffect(async () => {
// 		// if (!posts) {
// 		// 	const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts?_page=7&_limit=10');
// 		// 	dispatch(postsActions.setPosts(data));
// 		// }

// 		// posts && dispatch(postsActions.setPosts(posts));
// 		dispatch(postsActions.setPosts(posts));		// На самом деле в этом особо нет надобности
// 		// ибо, redux уместнее сдесь использовать например для авторизации
// 		// А посты можно в локальном
// 		// Ну либо в redux, если нам не нужна SEO
// 	}, [dispatch, posts])

// 	return (
// 		<div className={styles.container}>
// 			<Head>
// 				<title>Create Next App</title>
// 				<link rel="icon" href="/favicon.ico" />
// 			</Head>

// 			<main className={styles.main}>
// 				<h1 className={styles.title}>
// 					Welcome to <a href="https://nextjs.org">Next.js!</a>
// 				</h1>

// 				{ posts && posts.length &&
// 					posts.map((post) => (
// 						<div key={post.id}>
// 							<Link href="/post/[id]" as={`/post/${post.id}`}><a>{post.title}</a></Link>
// 						</div>
// 					))
// 				}

// 				{/* { (!postsRedux || !postsRedux.length) &&
// 					<div>Loading</div>
// 				} */}
// 			</main>
// 		</div>
// 	)
// }

// // Эта штука вызывается на сервере
// // Так же она вызывается, при переходе на другую страницу, например с помощью next/link, next/router
// // но уже на клиенте
// Home.getInitialProps = async (ctx) => {	// в контексте можно найти текущие параметры (например id)
// 	// if (!req) {
// 	// 	return {
// 	// 		posts: null
// 	// 	}
// 	// }
	
// 	const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_page=7&_limit=10');

// 	return {
// 		posts: data
// 	}
// }















// import React, { useEffect } from 'react';
// import axios from 'axios';
// import Head from 'next/head'
// import Link from 'next/link'
// import { useDispatch, useSelector } from 'react-redux';
// import styles from '../styles/Home.module.css'
// import { postsActions } from '../store/actions';

// export default function Home({ posts }) {	 // посты приходят с сервера
// 	const dispatch = useDispatch();

// 	const postsRedux = useSelector(state => state.posts.posts);
// 	console.log('postsRedux', postsRedux)

// 	// Запихиваю посты в store, можно это не делать, если redux не нужен
// 	useEffect(async () => {
// 		if (!posts) {
// 			const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts?_page=7&_limit=10');
// 			dispatch(postsActions.setPosts(data));
// 		}

// 		posts && dispatch(postsActions.setPosts(posts));
// 	}, [dispatch, posts])

// 	return (
// 		<div className={styles.container}>
// 			<Head>
// 				<title>Create Next App</title>
// 				<link rel="icon" href="/favicon.ico" />
// 			</Head>

// 			<main className={styles.main}>
// 				<h1 className={styles.title}>
// 					Welcome to <a href="https://nextjs.org">Next.js!</a>
// 				</h1>

// 				{ postsRedux && postsRedux.length &&
// 					postsRedux.map((post) => (
// 						<div key={post.id}>
// 							<Link href="/post/[id]" as={`/post/${post.id}`}><a>{post.title}</a></Link>
// 						</div>
// 					))
// 				}

// 				{ (!postsRedux || !postsRedux.length) &&
// 					<div>Loading</div>
// 				}
// 			</main>
// 		</div>
// 	)
// }

// // Эта штука вызывается на сервере
// // Так же она вызывается, при переходе на другую страницу, например с помощью next/link, next/router
// // но уже на клиенте
// Home.getInitialProps = async ({ req }) => {	// в контексте можно найти текущие параметры (например id)
// 	if (!req) {
// 		return {
// 			posts: null
// 		}
// 	}
	
// 	const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_page=7&_limit=10');

// 	return {
// 		posts: data
// 	}
// }
















// import React, { useEffect } from 'react';
// import axios from 'axios';
// import Head from 'next/head'
// import { useDispatch } from 'react-redux';
// import styles from '../styles/Home.module.css'
// import { postsActions } from '../store/actions';

// export default function Home({ posts }) {	 // посты приходят с сервера
// 	const dispatch = useDispatch();

	// const postsRedux = useSelector(state => state.posts.posts);
	// console.log('postsRedux', postsRedux)

// 	// Запихиваю посты в store, можно это не делать, если redux не нужен
// 	useEffect(() => {
// 		dispatch(postsActions.setPosts(posts));
// 	}, [dispatch, posts])
// 	// Здесь такой подход, хотя можно и по другому, использовать fetchPosts, 
// 	// и вытаскивать их из store, с помощью useSelector
// 	// но тогда, данных не будет в стартовой разметке, (а это не SEO вариант)
// 	// Таким образом, можно самому выбирать, когда нужен SEO, а когда нет


// 	return (
// 		<div className={styles.container}>
// 			<Head>
// 				<title>Create Next App</title>
// 				<link rel="icon" href="/favicon.ico" />
// 			</Head>

// 			<main className={styles.main}>
// 				<h1 className={styles.title}>
// 					Welcome to <a href="https://nextjs.org">Next.js!</a>
// 				</h1>

// 				{ posts && posts.length &&
// 					posts.map((post) => (
// 						<div key={post.id}>{post.title}</div>
// 					))
// 				}
// 			</main>
// 		</div>
// 	)
// }

// // Эта штука вызывается на сервере
// // Так же она вызывается, при переходе на другую страницу, например с помощью next/link, next/router
// // но уже на клиенте
// Home.getInitialProps = async (ctx) => {	// в контексте можно найти текущие параметры (например id)
// 	if (!ctx.req) {
// 		return {
// 			posts: []
// 		}
// 	}
	
// 	const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_page=7&_limit=10');

// 	return {
// 		posts: data
// 	}
// }











// // Вариант без SEO
// import React, { useEffect } from 'react';
// import axios from 'axios';
// import Head from 'next/head'
// import { useDispatch, useSelector } from 'react-redux';
// import styles from '../styles/Home.module.css'
// import { postsActions } from '../store/actions';

// export default function Home() {
// 	const dispatch = useDispatch();
// 	const { posts } = useSelector(state => state.posts);

// 	useEffect(() => {
// 		dispatch(postsActions.fetchPosts());
// 	}, [dispatch])

// 	return (
// 		<div className={styles.container}>
// 			<Head>
// 				<title>Create Next App</title>
// 				<link rel="icon" href="/favicon.ico" />
// 			</Head>

// 			<main className={styles.main}>
// 				<h1 className={styles.title}>
// 					Welcome to <a href="https://nextjs.org">Next.js!</a>
// 				</h1>

// 				{ posts && posts.length &&
// 					posts.map((post) => (
// 						<div key={post.id}>{post.title}</div>
// 					))
// 				}
// 			</main>
// 		</div>
// 	)
// }
