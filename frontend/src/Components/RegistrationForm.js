import React,{ useState } from 'react'
import {useNavigate,Link } from 'react-router-dom';

import axios from 'axios'

function RegistrationForm() {
    const navigate = useNavigate();
    const apiUrl = "https://to-do-list-server-two.vercel.app";
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })
    const [cpass,setCPass] = useState("");

    const cpassHandler = (e)=>{
        setCPass(e.target.value);
    }
    const inputHandler = (e)=>{
        const key = e.target.name;
        const value = e.target.value;
        setData({...data,[key]:value});
    }
    function formSubmit(e){
        e.preventDefault();
        var pattern = /(^[a-zA-Z0-9@#$%&*]{2,9})+([@#$%&*]{1,1})+([a-zA-Z0-9@#$%&*]{3,10})$/;
        if (data.password.match(pattern) && data.password === cpass){
            console.log(data);
            axios.post(`${apiUrl}/register`,data)
            navigate('/')
        }
        
    }
  return (
    <>
    <div className='container w-50 border mt-4 mb-4 shadow'>
        <h2 className='text-center text-primary p-3'>Register</h2>
        <form onSubmit={formSubmit}>
            <div className="mb-3">
                <label for="name" className="form-label">Name :</label>
                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} required></input>
                {/*<p>{terr ?<span style={{color:'green'}}>Correct</span>:<span style={{color:'red'}}>Please fill correct data</span>}</p>*/}
            </div>
            <div className="mb-3">
                          <label for="email" className="form-label">Email : </label>
                          <input type="email" className="form-control mt-2" name="email" value={data.email} onChange={inputHandler} required/>
                        </div>
            <div classBane="mb-3">
                <label for="pass" className="form-label">Password :</label>
                <input type="password" className="form-control" name="password" onChange={inputHandler} required/>
            </div>
            <div className="mb-3">
                <label for="cpass" className="form-label">Confirm Password :</label>
                <input type="password" className="form-control" name="cpass" onChange={cpassHandler} required/>
            </div>
            <button type="submit" className="btn btn-primary mx-auto my-3 d-flex justify-content-center">Register</button>
            </form>
            <h6 className='text-center pb-3'>Already a user? <span className='text-primary'><Link to="/">Login now</Link></span></h6>
                  
     </div>
     </>
  )
}

export default RegistrationForm

