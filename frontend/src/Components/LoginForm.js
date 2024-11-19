import React, { useState } from 'react';
import axios from 'axios'
import {Link,useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();
    const apiUrl = "https://to-do-list-server-two.vercel.app/";
    const [data,setData] = useState({
        email:"",
        password:""
    });

    const inputHandler = (e)=>{
        const key = e.target.name;
        const value = e.target.value;
        setData({...data,[key]:value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        try {
            const res = await axios.post(apiUrl,data);
            if (res.data.success) {
              localStorage.setItem('token', res.data.token);
              navigate('/home');
            } else {
              console.log(res.data.message);
            }
          } catch (error) {
            console.error('Login Error:', error);
            //setError('An error occurred during login.');
          }
    }

    return (
      <>
              <div className="container w-25 border mt-5 shadow">
                  <h2 className='text-center text-primary p-3'>Login</h2>
                  <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                          <label htmlfor="email" className="form-label">Email : </label>
                          <input type="email" className="form-control mt-2" name="email" value={data.email} onChange={inputHandler} required/>
                        </div>
                      <div  className="mb-3">
                          <label for="password" className="form-label">Password : </label>
                          <input type="password" className="form-control mt-2" name="password" value={data.password} onChange={inputHandler} required/>
                        </div>
                      <button type="submit" className="btn btn-primary mx-auto my-3 d-flex justify-content-center">Login</button>
                  </form>
                  <h6 className='text-center pb-3'>Not a member? <span className='text-primary'><Link to="/register">Signup now</Link></span></h6>
                  
              </div>
      </>
  );
}

export default LoginForm;
