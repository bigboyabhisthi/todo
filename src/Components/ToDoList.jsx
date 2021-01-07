import React from 'react';
import ToDo from './ToDo';

const ToDoList = props => {
	const { taskList, toggleCompleted } = props;
	return (
		<React.Fragment>
			{taskList.map(task => (
				<ToDo
					id={task.id}
					key={task.id}
					name={task.name}
					completed={task.completed}
					toggleCompleted={toggleCompleted}
				/>
			))}
		</React.Fragment>
	);
};

export default ToDoList;
