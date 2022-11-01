import { useEffect, useState } from 'react';
import Post from './Post';
import img from '../error.png';
import loadig from '../Eclipse-1s-200px.svg';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(API_URL);
				const json = await res.json();
				setPosts(json);
			} catch (error) {
				setError(error.message);
			}
			setIsLoading(false);
		};
		fetchData();
	}, []);

	// useEffect(() => {
	// 	fetch(API_URL)
	// 		.then((response) => response.json())
	// 		.then((json) => setPosts(json))
	// 		.catch((error) => setError(error.message))
	// 		.finally(() => setIsLoading(false));
	// }, []);

	return error ? (
		<img src={img} alt={error} />
	) : (
		<>
			<h1>Post</h1>
			<div className="posts">
				{isLoading ? (
					<img className="loading" src={loadig} alt="Loading" />
				) : (
					posts &&
					posts.map((post) => {
						return <Post key={post.id} {...post} />;
					})
				)}
			</div>
		</>
	);
}

export default Posts;
