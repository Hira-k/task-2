import React from 'react';
import logo from '../assets/logo.png';

// import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      {/* <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav> */}
      <header>
        <img className='logo' src={logo} alt='logo' />
        <nav>
          <ul className='nav__links'>
            <li>
              <a href='/'>Enroll For Course</a>
            </li>
            <li>
              <a href='/'>Meet Your Trainers</a>
            </li>
          </ul>
        </nav>
        <a className='cta' href='/'>
          <button className=' btn button_text'>Log in</button>
        </a>
      </header>
    </>
  );
}

export default Navbar;
