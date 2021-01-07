import React from 'react';

const ToDo = props => {
	const { id, name, completed, toggleCompleted } = props;

	const handleChange = e => {
		console.log(`${name}: ${!completed}`);
		return toggleCompleted(id);
	};

	return (
		<div>
			<label htmlFor='task'>
				<input
					type='checkbox'
					name='task'
					id='task'
					checked={completed}
					onChange={handleChange}
				/>
				{name}
			</label>
		</div>
	);
};

export default ToDo;
