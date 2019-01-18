import React        from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {
	const elements = todos.map(item => {
		const {id, ...itemTodo} = item;

		return (
			<li key={id}>
				<TodoListItem {...itemTodo}/>
			</li>
		);
	});
	return (
		<ul>
			{elements}
		</ul>
	);
};

export default TodoList;
