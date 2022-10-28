import { useState } from 'react';
import GenerateRandomNum from '../utils/GenerateRandomNum';

function RandomNumber({ maxNum }) {
	const [randomNum, setRandomNum] = useState(GenerateRandomNum(maxNum));
	const changeRandomNum = () => {
		setRandomNum(GenerateRandomNum(maxNum));
	};

	return (
		<div>
			<h1>{randomNum}</h1>
			<button onClick={changeRandomNum}>Generate new random nuber</button>
		</div>
	);
}

export default RandomNumber;
