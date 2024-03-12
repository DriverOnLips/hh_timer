import React from 'react';
import Task from './Task';

function TaskList({ tasks, onStopTask }) {
	return (
		<ul id='task_list'>
			{tasks.map((task, index) => (
				<Task
					key={index}
					task={task}
					onStopTask={() => onStopTask(index)}
				/>
			))}
		</ul>
	);
}

export default TaskList;
