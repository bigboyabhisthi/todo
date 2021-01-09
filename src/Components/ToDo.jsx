import React from 'react';
import '../ToDo.css';

const ToDo = props => {
	const { id, name, completed, toggleCompleted } = props;

	const callToggleCompleted = e => {
		console.log((e.target.checked = !e.target.checked));
		return toggleCompleted(id);
	};

	const labelStyle = {
		textDecoration: 'line-through',
		color: '#758283',
	};

	return (
		<div className='todoContainer'>
			<label htmlFor={id}>
				<input
					type='checkbox'
					className='checkBox'
					name='task'
					id={id}
					checked={completed}
					onChange={callToggleCompleted}
				/>
				<i
					className={completed ? 'fa fa-check-circle' : 'fa fa-circle-thin'}
					aria-hidden='true'
				></i>
				<span style={completed ? labelStyle : {}}>{name}</span>
			</label>
		</div>
	);
};

export default ToDo;
