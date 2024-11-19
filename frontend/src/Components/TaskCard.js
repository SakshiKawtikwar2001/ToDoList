import React from 'react';

function TaskCard({ task, handleDelete, startEdit }) {
  return (
    <div className="col-md-4 mb-3 mt-2">
      <div className="card" style={{ width: '18rem', height: '200px' }}>
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
            <button onClick={() => handleDelete(task)} className="btn btn-danger me-2">Delete</button>
            <button onClick={() => startEdit(task)} className="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
