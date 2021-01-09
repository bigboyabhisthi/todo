import React from 'react';
import ToDo from './ToDo';

const ToDoList = props => {
	const { taskList, toggleCompleted } = props;
	return (
		<div className='todoList'>
			{taskList.map(task => (
				<ToDo
					id={task.id}
					key={task.id}
					name={task.name}
					completed={task.completed}
					toggleCompleted={toggleCompleted}
				/>
			))}
		</div>
	);
};

export default ToDoList;
