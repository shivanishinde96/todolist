import React, { useState } from 'react';

import AddNewTask from './AddNewTask';
import ShowTasks from './ShowTasks';
import ShowCompletedList from './ShowCompletedList';


const ToDoList = () =>{
	const [taskList, setTaskList] = useState([]);
	const [completedList, setCompletedList] = useState([]);

	const handleAddNewTask = (task) => {
		setTaskList([...taskList, task]);
	}

	const handleCompleteTask = (index) => {
		let tempTaskList = JSON.parse(JSON.stringify(taskList));
		let tempCompletedList = JSON.parse(JSON.stringify(completedList));

		tempCompletedList.splice(0, 0, tempTaskList[index]);
		tempTaskList.splice(index, 1);
		setTaskList(tempTaskList);
		setCompletedList(tempCompletedList);
	}

	const handleDeleteTask = (index) => {
		let tempTaskList = JSON.parse(JSON.stringify(taskList));
		tempTaskList.splice(index, 1);
		setTaskList(tempTaskList);
	}

	const handleDeleteCompletedTask = (index) => {
		let tempCompletedList = JSON.parse(JSON.stringify(completedList));
		tempCompletedList.splice(index, 1);
		setCompletedList(tempCompletedList);
	}

	const handleRecover = (index) => {
		let tempTaskList = JSON.parse(JSON.stringify(taskList));
		let tempCompletedList = JSON.parse(JSON.stringify(completedList));

		tempTaskList.splice(0, 0, tempCompletedList[index]);
		tempCompletedList.splice(index, 1);
		setTaskList(tempTaskList);
		setCompletedList(tempCompletedList);
	}

	return(
		<div className=' main-body'>
			<div className='main-content'>
				
				<h1 className='center-text'>ToDo List</h1>
			
				<AddNewTask handleAddNewTask={handleAddNewTask} />
		
				<ShowTasks
					taskList={taskList}
					handleDeleteTask={handleDeleteTask}
					handleCompleteTask={handleCompleteTask}
				/>
				<ShowCompletedList
					handleDeleteTask={handleDeleteCompletedTask}
					taskList={completedList}
					handleRecover={handleRecover}
				/>
			</div>
			<br/><br/><br/>
		</div>
	);
}

export default ToDoList;