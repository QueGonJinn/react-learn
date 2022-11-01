import './App.scss';
import Wrapper from './Components/Wrapper';
function App() {
	return (
		<div className="App">
			<Wrapper color="blue">
				<h2>Goodbye</h2>
				<button>Click Me!</button>
			</Wrapper>
			<Wrapper color="green">
				<h2>Goodbye</h2>
				<button>Click Me!</button>
			</Wrapper>
		</div>
	);
}

export default App;
