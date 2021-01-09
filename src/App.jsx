import React, { useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
import ToDoList from './Components/ToDoList';
import './App.css';

const LOCAL_STORAGE_KEY = 'madhavrjha@github.io/todo.todo-list';

const App = () => {
	const [taskName, setTaskName] = useState('');
	const [taskList, setTaskList] = useState([]);

	useEffect(() => {
		const savedTaskList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (savedTaskList) setTaskList(savedTaskList);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskList));
	}, [taskList]);

	const toggleCompleted = id => {
		let newTaskList = [...taskList];
		let task = newTaskList.find(task => task.id === id);
		task.completed = !task.completed;
		setTaskList(newTaskList);
	};

	const handleChange = e => {
		setTaskName(e.target.value);
	};

	const addTaskToList = e => {
		e.preventDefault();

		// const copyTaskName = taskName.toLocaleLowerCase();
		const isEmpty = taskName === '';
		const isExist = taskList.find(
			task => taskName.toLocaleLowerCase() === task.name.toLocaleLowerCase()
		);

		if (!isEmpty && !isExist) {
			setTaskName('');
			setTaskList(prevTaskList => [
				...prevTaskList,
				{
					id: uuid(),
					name: taskName,
					completed: false,
				},
			]);
		} else {
			if (isEmpty) console.log('Empty Task Could not be added');
			if (isExist) console.log('Existed Task Could not be added');
		}
	};

	const removeCompletedTask = e => {
		setTaskList(prevTaskList => {
			return prevTaskList.filter(task => !task.completed);
		});
	};

	const countIncompletedTask = () => {
		return taskList.filter(task => !task.completed).length;
	};

	return (
		<div className='App'>
			<h1 className='header'>Todo</h1>
			<div className='container'>
				<form className='getArea' onSubmit={addTaskToList}>
					<div className='inputBox'>
						<input
							type='text'
							name='taskName'
							placeholder='Enter Your Task'
							value={taskName}
							onChange={handleChange}
						/>
					</div>
					<div className='actionArea'>
						<p>
							{countIncompletedTask() === 0 ? 'No' : countIncompletedTask()}{' '}
							Tasks Remaining
						</p>
						<button
							className='myButton'
							title='Remove Completed'
							onClick={removeCompletedTask}
						>
							<i className='fa fa-trash' aria-hidden='true'></i>
						</button>
					</div>
				</form>
				<ToDoList taskList={taskList} toggleCompleted={toggleCompleted} />
			</div>
		</div>
	);
};

export default App;
