import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large moveleft'>Developer Community</h1>
          <p className='lead moveright'>
            Create developer profile/portfolio, share posts and get help from
            other developers
            <div className='buttons mt-2'>
              <Link to='/register' class='btn btn-primary'>
                Sign Up
              </Link>
              <Link to='/login' class='btn btn-light'>
                Login
              </Link>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
