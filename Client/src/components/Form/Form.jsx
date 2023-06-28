import React from 'react'
import { useState } from 'react'
import validation from "../Validation/Validation"
import "./Form.css"

export default function Form({login}) {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({})

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

  const handleSubmit = (event) =>{
    event.preventDefault()
    login(userData)
  }

  return (
    <div className='container__form'>

      <h1 className='h1__form'>RICK AND MORTHY</h1>
        <form className='form__login'onSubmit={handleSubmit} >
            <h2>Login</h2>
            <div className='group'>
            <input name='email' type="text" value={userData.email} onChange={handleChange} required/><span className='bar'></span>
            <label htmlFor="email">Email: </label>
            {errors.email && <p>{errors.email}</p>}
            </div>

            <div className='group'>
            <input name='password' type="password" value={userData.password} onChange={handleChange} required/>
            <label htmlFor="password">Password: </label>
            <span className='bar'></span>
            {errors.password && <p>{errors.password}</p>}
            </div>  
            
            <button type='submit' className='button__form' >Log in</button>
        </form>
    </div>
  )
}
