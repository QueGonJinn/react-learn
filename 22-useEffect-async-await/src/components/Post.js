function Post({ userId, title, body }) {
	return (
		<div className="post">
			<div className="post__title">
				<h2>{title}</h2>
				<h6>User ID: {userId}</h6>
			</div>
			<p>{body}</p>
		</div>
	);
}

export default Post;
