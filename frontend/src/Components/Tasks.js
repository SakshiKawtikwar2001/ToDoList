import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskCard from './TaskCard';
import EditTaskModal from './EditTaskModal';

function Tasks() {
  const navigate = useNavigate();
  const apiUrl = "https://to-do-list-server-two.vercel.app";
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [editingTask, setEditingTask] = useState(null);
  const [updatedTask, setUpdatedTask] = useState({ title: '', description: '' });

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        navigate('/login');
        return;
      }
      const res = await axios.get(`${apiUrl}/tasks`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setTasks(res.data);
    } catch (error) {
      if (error.response) {
        console.error('Error fetching tasks:', error.response.data);
        if (error.response.status === 401) {
          navigate('/');
        }
      } else if (error.request) {
        console.error('Error fetching tasks: No response from server', error.request);
      } else {
        console.error('Error fetching tasks:', error.message);
      }
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (task) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        navigate('/login');
        return;
      }
      await axios.delete(`${apiUrl}/delete/${task._id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setTasks(tasks.filter((t) => t._id !== task._id));
    } catch (error) {
      console.error('Error deleting task:', error.response ? error.response.data : error.message);
    }
  };

  const addTask = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        navigate('/login');
        return;
      }
      if (newTask.title !== '' && newTask.description !== '') {
        const res = await axios.post(`${apiUrl}/newTask`, newTask, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        setTasks([...tasks, res.data]);
        setNewTask({ title: '', description: '' });
      }
    } catch (error) {
      console.error('Error adding task:', error.response ? error.response.data : error.message);
    }
  };

  const startEdit = (task) => {
    setEditingTask(task);
    setUpdatedTask({ title: task.title, description: task.description });
    const modal = new window.bootstrap.Modal(document.getElementById('editTaskModal'));
    modal.show();
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        navigate('/login');
        return;
      }
      if (updatedTask.title !== '' && updatedTask.description !== '') {
        const res = await axios.put(`${apiUrl}/update/${editingTask._id}`, updatedTask, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        setTasks(tasks.map((task) => (task._id === editingTask._id ? updatedTask : task)));
        const modal = window.bootstrap.Modal.getInstance(document.getElementById('editTaskModal'));
        modal.hide();
        setEditingTask(null);
        setUpdatedTask({ title: '', description: '' });
      }
    } catch (error) {
      console.error('Error updating task:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='container w-75 mx-auto'>
      <TaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      {tasks.length === 0 ? (
        <p className="text-center">No tasks available. Please add a new task.</p>
      ) : (
        <div className="row">
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              handleDelete={handleDelete}
              startEdit={startEdit}
            />
          ))}
        </div>
      )}
      <EditTaskModal
        updatedTask={updatedTask}
        setUpdatedTask={setUpdatedTask}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default Tasks;
