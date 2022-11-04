import Todo from './Todo';
import emty from '../../empty.png';
import styles from './TodoList.module.scss';

function TodoList({ todos, deleteTodo, toggleTodo }) {
	return (
		<div className={styles.todoListContainer}>
			{todos.length === 0 ? (
				<img
					className={styles.todoListImg}
					src={emty}
					alt="Todo list is empty"
				/>
			) : (
				todos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						deleteTodo={deleteTodo}
						toggleTodo={toggleTodo}
					/>
				))
			)}
		</div>
	);
}

export default TodoList;
