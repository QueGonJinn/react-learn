import './info.scss';
import styles from './info.module.scss';

function Info() {
	return (
		<div className={styles.info}>
			<h1>Hello from the Info component</h1>
			<button className="myButton">Click Me!</button>
		</div>
	);
}

export default Info;
