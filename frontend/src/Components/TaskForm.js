import React from 'react';

function TaskForm({ newTask, setNewTask, addTask }) {
  return (
    <div className='d-flex flex-column w-50 m-auto mt-4 mb-4'>
      <input type="text" value={newTask.title} className='px-4 mb-2'onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        placeholder="Task title..." required/>
      <textarea type="text" value={newTask.description} className='px-4 mb-2' onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        placeholder="Task description..." required/>
      <button className='btn btn-dark mx-auto mt-4 ' onClick={addTask}>Add New Task</button>
    </div>
  );
}

export default TaskForm;
