import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

function App() {
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		setTasks([...tasks, { ...task, time: 0 }]);
	};

	const stopTask = (index) => {
		const newTasks = [...tasks];
		newTasks[index].time = newTasks[index].time / 1000;
		setTasks(newTasks);
	};

	return (
		<div
			id='app'
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				height: '100vh',
				justifyContent: 'center',
			}}
		>
			<span className='title'>Tasks Timer</span>
			<TaskInput onAddTask={addTask} />
			<TaskList
				tasks={tasks}
				onStopTask={stopTask}
			/>
			<span className='dol'>Created by @driver_on_lips</span>
		</div>
	);
}

export default App;
