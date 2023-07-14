import React from 'react'
import { useState } from 'react'
import validation from "../Validation/Validation"
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
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

  const [viewPass, setViewPass] = useState(false)
  

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
    login(userData)
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
              <div className='viewPass' onClick={() => setViewPass(!viewPass)}>
              {viewPass ? <FontAwesomeIcon icon={faEye} />
                      : <FontAwesomeIcon icon={faEyeSlash} /> }
            </div>
            <input name='password' type={ viewPass ? "text" : "password"} value={userData.password} onChange={handleChange}/>
            <label htmlFor="password">Password: </label>
  

            
            <span className='bar'></span>
            {errors.password && <p>{errors.password}</p>}
            </div>  
            
            <button type='submit' className='button__form' >Log in</button>
        </form>
    </div>
  )
}
