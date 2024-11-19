import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <button onClick={handleLogout} className="btn btn-outline-light">
      Logout
    </button>
  )
}

export default Logout