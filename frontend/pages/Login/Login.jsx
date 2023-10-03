import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='containerLogin'>
      <div className='contentBlock'>
        <p className='welcomeText'>
          SiteSale
        </p>
        <p className='loginText'>
          Login
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
        <div>
          <button className='btnLogin'>
            Login
          </button>
        </div>
        <Link to={'/register'} className='linkNoAccount'>
          <p className='textNoAccount'>
          No account?
          </p>
        </Link>

      </div>
      <div className='conetntBlockTwo'>

      </div>
    </div>
  )
}
