import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='containerLogin'>
      <div className='contentBlock'>
        <p className='welcomeText'>
          SiteSale
        </p>
        <p className='loginText'>
          Register
        </p>
        <input
          placeholder='Name'
          className='inputLogin'
        />
        <input
          placeholder='Email'
          className='inputLogin'
        />
        <input
          placeholder='Password'
          className='inputLogin'
        />
        <input
          placeholder='RePassword'
          className='inputLogin'
        />
        <div>
          <button className='btnLogin'>
            Register
          </button>
        </div>
        <Link to={'/login'} className='linkNoAccount'>
          <p className='textNoAccount'>
            Already have an account?
          </p>
        </Link>

      </div>
      <div className='conetntBlockTwo'>

      </div>
    </div>
  )
}
