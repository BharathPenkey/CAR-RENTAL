import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';
import '../styles/Form.css'


export  function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const {signup, isloading, error} = useSignup()
 

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await signup(email, password)

    }
    
  return (
    <form className='login'  onSubmit={handleSubmit}>

       <h3>Register in your account</h3>

       <input type='text'
        onChange={(e) => setName(e.target.value)}
        value = {name}
        placeholder='name'/>

       <input type='email'
        onChange={(e) => setEmail(e.target.value)}
        value = {email}
        placeholder='email'/>

       <input type='number'
        onChange={(e) => setContact(e.target.value)}
        value = {contact}
        placeholder='contact'/>

       <input  type='password' 
       onChange={(e) => setPassword(e.target.value)}
       value={password}
       placeholder='password'/>

       <input type='password'
        onChange={(e) => setconfirmPassword(e.target.value)}
        value = {confirmPassword}
        placeholder='confirm password'/>
        
        <div><Link to='/'>Signin</Link></div>
        <button disabled={isloading}>Register</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}


export  function Signup() {
  return (
    <div className='background'>
        <div className='home'>
        <div className='desc'>
            All you needed is a wheel in your Hand and four on Road.
            
        </div>
        <div className='form'><Form/></div>
        </div>
    </div>
  )
}

