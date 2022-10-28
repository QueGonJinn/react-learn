import { useState } from 'react';
import './App.scss';
import Counter from './components/Counter';
import Button from './components/Button';

const texts = ['Click Me', 'Click Me Please', 'Press'];

function App() {
	const [count, setCount] = useState(0);
	const incrementCount = () => {
		setCount(count + 1);
	};
	return (
		<div className="App">
			<Counter count={count} />
			{texts.map((text, index) => {
				return (
					<Button text={text} onClick={incrementCount} key={index} />
				);
			})}
		</div>
	);
}

export default App;
