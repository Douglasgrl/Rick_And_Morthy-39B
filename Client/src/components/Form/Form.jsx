import React from 'react'
import { useState } from 'react'
import validation from "../Validation/Validation"
import { useNavigate } from 'react-router-dom'
import "./Form.css"

export default function Form({login}) {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({
    email : "",
    password: "",
  })

  const handleChange = (event) =>{
    setUserData({
      ...userData,
      [event.target.name] : event.target.value
    })

    setErrors(validation({
      ...userData,
      [event.target.name] : event.target.value
    }))
  }

  const navigate = useNavigate();

  const handleSubmit = (event) =>{
    event.preventDefault()
    let aux = Object.keys(errors);

    if (aux.length === 0) {
      
      setErrors({
        email: "",
        password: "",
      });
      login(userData);
      setUserData({
        email: "",
        password: "",
      });

      navigate("/home");
    } else {
      navigate("/home");
      return alert("error")
    } 
  };


  return (
    <div className='container__form'>

      <h1 className='h1__form'>RICK AND MORTHY</h1>
        <form className='form__login'onSubmit={handleSubmit} >
            <h2>Login</h2>
            <div className='group'>
            <input name='email' type="text" value={userData.email} onChange={handleChange} /><span className='bar'></span>
            <label htmlFor="email">Email: </label>
            {errors.email && <p>{errors.email}</p>}
            </div>

            <div className='group'>
            <input name='password' type="password" value={userData.password} onChange={handleChange}/>
            <label htmlFor="password">Password: </label>
            <span className='bar'></span>
            {errors.password && <p>{errors.password}</p>}
            </div>  
            
            <button type='submit' className='button__form' >Log in</button>
        </form>
    </div>
  )
}
