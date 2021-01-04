import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <div>
      <Link to='/register'>To Register</Link>
      <div>
        <Link to='/login'>To Login</Link>
      </div>
    </div>
  )
}

export default HomePage;