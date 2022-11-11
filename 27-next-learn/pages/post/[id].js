import React from 'react';
import { useRouter } from 'next/router';

function Post() {
	const router = useRouter();
	console.log(router);
	return (
		<>
			<h1>Post {router.query.id}</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
		</>
	);
}

export default Post;
