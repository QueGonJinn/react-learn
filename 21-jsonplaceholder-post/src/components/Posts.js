import { useEffect, useState } from 'react';
import Post from './Post';
import img from '../error.png';
import loadig from '../Eclipse-1s-200px.svg';

function Posts() {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => setPosts(json))
			.catch((error) => setError(error.message))
			.finally(() => setIsLoading(false));
	}, []);

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
