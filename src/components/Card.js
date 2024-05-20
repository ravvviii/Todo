import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Card({ TaskFunction, handleAddClick }) {
  const [task, setTask] = useState({
    id: '',
    task: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    TaskFunction(task);
    setTask({ id: '', task: '' }); // Clear the input after submission
    handleAddClick(); // Close the form
  };

  const handleCancel = () => {
    setTask({ id: '', task: '' });
    handleAddClick(); // Close the form
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl mb-4">Add New Task</h2>
      <div className="mb-4">
        <label htmlFor="task" className="block text-gray-700 mb-2">Task</label>
        <input
          type="text"
          id="task"
          value={task.task}
          onChange={(e) => setTask({ ...task, task: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Enter your task"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Card;
