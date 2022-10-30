import { useState } from 'react';
import './App.scss';
import Counter from './components/Counter';
import Button from './components/Button';

function App() {
	const [count, setCount] = useState(0);
	const incrementCount = () => {
		setCount(count + 1);
	};
	const resetCount = () => {
		setCount(0);
	};
	return (
		<div className="App">
			<Counter count={count} />
			<Button onClick={incrementCount} />
			<Button onClick={incrementCount} />
			<Button onClick={incrementCount} />
			{!!count && (
				<div>
					<button className="green" onClick={resetCount}>
						Reset
					</button>
				</div>
			)}
		</div>
	);
}

export default App;
