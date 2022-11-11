import Link from 'next/link';

export default function Index() {
	return (
		<>
			<h1>Hello Next.js!</h1>
			<p>
				<a href="/about">About</a>
				<br />
				<a href="/posts">Posts</a>
			</p>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
		</>
	);
}
