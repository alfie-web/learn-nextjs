import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import classNames from 'classnames';

const Pagination = () => {
	const { posts, totalDocs, currentPage, totalPages } = useSelector(state => state.posts);

	// TODO: Теперь при клике на ссылку, меняем currentPage в store
	// Отслеживаем его в useEffect
	// Получаем посты

	return posts.length ? (
		<ul className="Pagination">
			Pagination
			{ currentPage > 1 && <li><Link href={`/posts?page=${currentPage - 1}`}><a>{'<'}</a></Link></li> }
			{ totalPages && new Array(totalPages).fill(0).map((p, i) => (
				<li 
					key={i + 1} 
					className={classNames('Pagination__item', { 'Pagination__item--active': i + 1 === currentPage })}
				>
					<Link href={`/posts?page=${i + 1}`}><a>{i + 1}</a></Link>
				</li>
			))}
			{ currentPage < totalPages && <li><Link href={`/posts?page=${currentPage + 1}`}><a>{'>'}</a></Link></li> }
		</ul>
	) : null
}

export default Pagination;
