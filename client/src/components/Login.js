import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const onSubmitAuth = (e) => {
    e.preventDefault();


    window.location.reload();
  }


  return (
    <div>
      <form onSubmit={onSubmitAuth}>
        <input
          type='text'
          placeholder='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='text'
          placeholder='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <Link to='/'>Home</Link>
    </div>

  )
}

export default Login;