import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import classNames from 'classnames';

const Pagination = ({ offsetLeft = 1, offsetRight = 3 }) => {
	const { posts, currentPage, totalPages } = useSelector(state => state.posts);

	return posts.length ? (
		<ul className="Pagination">
			{ currentPage > 1 && <li><Link href={`/posts?page=${currentPage - 1}`}><a>{'<'}</a></Link></li> }

			{ currentPage !== 1 && currentPage > 1 + offsetLeft && 
				<li><Link href={`/posts?page=${1}`}><a>{1}</a></Link></li> 
			}

			{ currentPage > 1 + (offsetLeft + 1) && <span>...</span> }

			{ totalPages && Array.from(Array(totalPages).keys()).filter(p => p + 1 >= currentPage - offsetLeft && p + 1 <= currentPage + offsetRight).map(p => {
				return (
					<li 
						key={p + 1} 
						className={classNames('Pagination__item', { 'Pagination__item--active': p + 1 === currentPage })}
					>
						<Link href={`/posts?page=${p + 1}`}><a>{p + 1}</a></Link>
					</li>
				)
			}) }

			{ currentPage < totalPages - (offsetRight + 1) &&<span>...</span> }

			{ currentPage !== totalPages && currentPage < totalPages - offsetRight && 
				<li><Link href={`/posts?page=${totalPages}`}><a>{totalPages}</a></Link></li> 
			}

			{ currentPage < totalPages && <li><Link href={`/posts?page=${currentPage + 1}`}><a>{'>'}</a></Link></li> }
		</ul>
	) : null
}

export default Pagination;