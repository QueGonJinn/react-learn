import './App.scss';
import PetInfo from './components/PetInfo';

function App() {
	return (
		<div className="App">
			<PetInfo animal="cat" age={7} />
			<PetInfo animal="dog" age={6} />
		</div>
	);
}

export default App;
