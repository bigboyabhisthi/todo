import React from 'react';

const ToDo = props => {
	const { id, name, completed, toggleCompleted } = props;

	const callToggleCompleted = e => {
		console.log(`${name}: ${!completed}`);
		return toggleCompleted(id);
	};

	const labelStyle = {
		textDecoration: 'line-through',
	};

	return (
		<div>
			<label
				htmlFor={id}
				onClick={callToggleCompleted}
				style={completed ? labelStyle : {}}
			>
				<input
					type='checkbox'
					name='task'
					id={id}
					checked={completed}
					onChange={callToggleCompleted}
				/>
				{name}
			</label>
		</div>
	);
};

export default ToDo;
