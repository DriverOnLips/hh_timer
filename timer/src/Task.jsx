import React, { useState, useEffect } from 'react';

function Task({ task, onStopTask }) {
	const [time, setTime] = useState(0);

	useEffect(() => {
		if (task.time === 0) {
			const interval = setInterval(() => {
				setTime((prevTime) => prevTime + 1000);
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [task.time]);

	const handleClick = () => {
		if (time / 1000 < 60) {
			alert('Задачи длительностью менее 1 минуты не сохраняются!');
		} else {
			task.time = time;
			onStopTask();
		}
	};

	return (
		<li onClick={handleClick}>
			<span>{task.name}</span>
			<span className='task_timer'>
				{task.time === 0
					? ` ${Math.floor(time / 1000 / 60)}:${Math.floor((time / 1000) % 60)}`
					: ` ${Math.floor(task.time / 3600)} ч ${Math.floor(
							(task.time % 3600) / 60
					  )} м`}
			</span>
		</li>
	);
}

export default Task;
