import React from 'react';

function EditTaskModal({ updatedTask, setUpdatedTask, handleUpdate }) {
  return (
    <div className="modal fade" id="editTaskModal" tabIndex="-1" aria-labelledby="editTaskModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editTaskModalLabel">Edit Task</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <input type="text" value={updatedTask.title} className='form-control mb-2'onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
              placeholder="Task title..." required/>
            <textarea type="text" value={updatedTask.description} className='form-control mb-2' onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
              placeholder="Task description..." required/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update Task</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTaskModal;
