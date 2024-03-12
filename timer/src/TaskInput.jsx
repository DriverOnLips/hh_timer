import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
	const [task, setTask] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (task.trim() === '') return;
		onAddTask({ name: task });
		setTask('');
	};

	return (
		<form
			id='task_input'
			onSubmit={handleSubmit}
			style={{ display: 'flex', justifyContent: 'center' }}
		>
			<input
				type='text'
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<button type='submit'>Добавить</button>
		</form>
	);
}

export default TaskInput;
