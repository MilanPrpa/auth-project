import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name)
    console.log(email)
    console.log(password)

    //window.location.reload();
  }


  return (
    <div className='container'>
      <h1>Register</h1>

      <form onSubmit={onSubmit}>
        <label>
          Name:
        <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
      <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
    <input
            type='text'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>

        <button>Register</button>

      </form>


      <div>
        <Link to='/'>Home</Link>
      </div>
    </div>
  )

}

export default Register;