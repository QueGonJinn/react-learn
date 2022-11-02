import Todo from './Todo';
import emty from '../../empty.png';
import styles from './TodoList.module.scss';

function TodoList({ todos, deleteTodo }) {
	return (
		<div className={styles.todoListContainer}>
			{todos.length === 0 ? (
				<img
					className={styles.todoListImg}
					src={emty}
					alt="Todo list is empty"
				/>
			) : (
				todos.map((todo, index) => (
					<Todo
						key={index}
						todo={todo}
						deleteTodo={deleteTodo}
						index={index}
					/>
				))
			)}
		</div>
	);
}

export default TodoList;
