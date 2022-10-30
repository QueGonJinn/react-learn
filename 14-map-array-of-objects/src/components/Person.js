function Person({ firstName, lastName, email, img }) {
	return (
		<div className="person">
			<img src={img} alt={img} />
			<h1>{`${firstName} ${lastName}`}</h1>
			<h2>{email}</h2>
		</div>
	);
}

export default Person;
