import { RiRefreshLine } from 'react-icons/ri';
import { MdOutlineDeleteSweep } from 'react-icons/md';
import Button from '../UI/Button';
import styles from './TodosActions.module.scss';

function TodosActions({
	resetTodos,
	deleteCompletedTodos,
	completedTodosExist,
}) {
	return (
		<div className={styles.todosActions}>
			<Button title="Reset todos" onClick={resetTodos}>
				<RiRefreshLine />
			</Button>
			<Button
				title="Clear completed todo"
				onClick={deleteCompletedTodos}
				disabled={!completedTodosExist}
			>
				<MdOutlineDeleteSweep />
			</Button>
		</div>
	);
}

export default TodosActions;
