import React from 'react';
import './style.scss';
import one from '../img/icons/1.png';
import three from '../img/icons/3.jpg';
import menu from '../img/icons/4.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='containerNavbar'>
      <div className='namedSite'>
        <Link to={'/'} className='linkHome'>
          <p className='onePartHeader'>Site</p>
          <p className='twoPartHeader'>Sale</p>
        </Link>
      </div>
      <div className='searchInput'>
        <input
          className='inpSearch'
          placeholder='Search'
        />
      </div>
      <div className='profileAndSettings'>
        <div className='blockLinksNavbar'>
          <Link to={'/bascet'} className='link'>
            <div className='blockImgLink'>
              <img
                className='iconBascet'
                src={one}
              />
            </div>
          </Link>
          <Link to={'/bascet'} className='link'>
            <div className='blockImgProfile'>
              <hr className='lineIconProfile' />
              <div className='blockProfileChildren'>
                <img
                  className='iconProfile'
                  src={three}
                />
              </div>
              <div className='blockUsers'>
                <p className='namedUsers'>Dmitry Ryzhev</p>
                <p className='emailUsers'>ryzhevdmitrij@gmail.com</p>
              </div>
            </div>
          </Link>
        </div>

        <div className='buttonMenuSecret'>
          <button className='btnMenuSecret'>
            <img 
              src={menu}
              className='imgButtonSecret'
            />
          </button>
        </div>
      </div>
      <div className='lineBLock'>
        <hr className='lineNavbar' />
      </div>
    </div>
  )
}
