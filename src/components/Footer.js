import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer className='footer bg-dark'>
        <div className='container bg-dark'>
          <div className='row text-left bg-dark'>
            <div className='col-md-3 col-md-3 bg-dark'>
              <h1>BSAA</h1>
              <div className='column '>
                <i className='social-icon fab fa-facebook-f' />
                <i className='social-icon fab fa-instagram' />
                <i className='social-icon fab fa-twitter' />
                <i className='social-icon fab fa-youtube' />
              </div>
              <h4 className='text-dark'>About us</h4>
              <h4 className='text-dark'>Our Member</h4>
              <h4 className='text-dark'>Berthing Report</h4>
              <h4 className='text-dark'>Careers</h4>
              <h4 className='text-dark'>Links</h4>
              <h4 className='text-dark'>Contact us</h4>
            </div>
            <div className='col-md-3'>
              <h4 className='text-dark'>Chattogram</h4>
              <h5>
                Chamber House (2nd floor), 38 Agrabad C/A, Chattogram-4100,
                Bangladesh
              </h5>
              <h5>031-723393</h5>
              <div>
                <h4 className='text-dark'>Chattogram</h4>
                <h5>
                  Chamber House (2nd floor), 38 Agrabad C/A, Chattogram-4100,
                  Bangladesh
                </h5>
                <h5>031-723393</h5>
              </div>
            </div>
            <div className='col-md-6'>
              <h2>Get in touch </h2>
              <form className='form-inline'>
                <div className='col pl-0'>
                  <div className='input-group pr-5 mb-1'>
                    <input
                      type='text'
                      className='form-control bg-dark text-white'
                      id='inlineFormInputGroupUsername2'
                      placeholder='Your Name '
                    />
                  </div>
                  <div className='input-group pr-5 mb-1'>
                    <input
                      type='text'
                      className='form-control bg-dark text-white'
                      id='inlineFormInputGroupUsername2'
                      placeholder='Your Email'
                    />
                  </div>
                  <div className='input-group pr-5 mb-1'>
                    <input
                      type='text'
                      className='form-control bg-dark text-white'
                      id='inlineFormInputGroupUsername2'
                      placeholder='SUbject'
                    />
                  </div>
                  <div className='input-group pr-5 mb-1'>
                    <textarea
                      type='text'
                      className='form-control bg-dark text-white'
                      id='inlineFormInputGroupUsername2'
                      placeholder='Your Message'
                      defaultValue={'                                '}
                    />
                  </div>
                  <a className='cta' href='/'>
                    <button className=' btn sec-button bg-dark'>
                      Send Message
                    </button>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p className=' text-center text-dark'>
          Copyright 2020 - 2021 All rights reserved by Antopolis
        </p>
      </footer>
    </>
  );
}

export default Footer;
