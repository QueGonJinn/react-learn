import { RiTodoFill } from 'react-icons/ri';
import { MdOutlineDeleteSweep } from 'react-icons/md';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import styles from './Todo.module.scss';

function Todo({ todo, deleteTodo, toggleTodo }) {
	return (
		<div
			className={`${styles.todo} ${
				todo.isCompleted ? styles.completedTodo : ''
			}`}
		>
			<RiTodoFill className={styles.todoIcon} />
			<div className={styles.todoText}>{todo.text}</div>
			<MdOutlineDeleteSweep
				onClick={() => deleteTodo(todo.id)}
				className={styles.deleteIcon}
			/>
			<AiOutlineCheckSquare
				className={styles.checkIcon}
				onClick={() => toggleTodo(todo.id)}
			/>
		</div>
	);
}

export default Todo;
