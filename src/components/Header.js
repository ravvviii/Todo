import React, { useState } from 'react';

function Header() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const TaskFunction = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, { id: prevTasks.length, task: newTask, completed: false }]);
  };

  const handleSaveClick = () => {
    if (newTask.trim() !== '') {
      TaskFunction(newTask);
      setNewTask('');
    }
  };

  const handleCancelClick = () => {
    setNewTask('');
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleResetClick = () => {
    setTasks([]);
  };

  return (
    <header className="flex flex-col p-4 bg-gray-800 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">TO-DO Application</h1>
        <div className="flex items-center">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="w-full px-3 py-2 mr-2 border border-gray-300 rounded text-black"
            placeholder="Enter your task"
          />
          <button
            onClick={handleSaveClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Save
          </button>
          <button
            onClick={handleCancelClick}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors ml-2"
          >
            Cancel
          </button>
          <button
            onClick={handleResetClick}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors ml-2"
          >
            Reset
          </button>
        </div>
      </div>

      <ul className="mt-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`p-2 my-2 rounded flex justify-between items-center ${task.completed ? 'bg-green-200 text-black font-bold	' : 'bg-red-200 text-black font-bold	' }`}
          >
            <span className="mr-2">{task.task}</span>
            <button
              onClick={() => toggleTaskCompletion(task.id)}
              className={`px-3 py-1 rounded ${task.completed ? 'bg-green-500 text-black' : 'bg-red-500 text-black font-bold	'} hover:bg-opacity-75 transition-colors`}
            >
              {task.completed ? 'Completed' : 'Mark Complete'}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
