import React from "react";
import { Link } from "react-router-dom";

import imgSmall from "../../assets/img/small-2.png";
import imgMedium from "../../assets/img/me-413.png";

import "./landing.scss";

const Landing = () => {
  return (
    <section id='landingPage'>
      <div className='heading-wrapper'>
        <h1 className='tagline animate__animated animate__bounceInLeft'>
          Steven De Avila
        </h1>
        <p className='tag-p animate__animated animate__bounceInRight '>
          Full-Stack Developer
        </p>
      </div>

      <div className='land-img-cont animate__animated animate__fadeIn'>
        <img
          src={imgSmall}
          srcSet={`${imgSmall} 320w, ${imgMedium} 768w`}
          sizes='(max-width: 320px) 145px'
          alt=''
        />
      </div>

      <div className='portfolio-link animate__animated animate__fadeIn '>
        <Link to='/portfolio'>
          <p className='landing-port'>Portfolio</p>
        </Link>
      </div>

      <div className='landing-contacts animate__animated animate__fadeIn '>
        <div className='contact-container'>
          <a href='mailto:stevejd88@gmail.com' role='button'>
            <svg
              version='1.1'
              id='Layer_1'
              x='0px'
              y='0px'
              viewBox='0 0 330.001 330.001'
            >
              <g id='XMLID_348_'>
                <path
                  fill='#f4f4f4'
                  id='XMLID_350_'
                  d='M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
		L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z'
                />
                <polygon
                  fill='#f4f4f4'
                  id='XMLID_351_'
                  points='165.001,146.4 310.087,40.001 19.911,40 	'
                />
              </g>
            </svg>
          </a>
        </div>

        <div className='contact-container'>
          <a
            href='https://www.linkedin.com/in/steven-de-avila-71198038/'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              fill='#f4f4f4'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='48px'
              height='48px'
            >
              <path d='M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z' />
            </svg>
          </a>
        </div>

        <div className='contact-container'>
          <a
            href='https://twitter.com/StevenJDeAvila'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 48 48'
              width='48px'
              height='48px'
            >
              <linearGradient
                id='_osn9zIN2f6RhTsY8WhY4a'
                x1='10.341'
                x2='40.798'
                y1='8.312'
                y2='38.769'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0' stopColor='#2aa4f4' />
                <stop offset='1' stopColor='#007ad9' />
              </linearGradient>
              <path
                fill='#f4f4f4'
                d='M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02'
              />
            </svg>
          </a>
        </div>

        <div className='contact-container'>
          <a
            href='https://github.com/stevejd88'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              baseProfile='tiny'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 2350 2314.8'
            >
              <path
                fill='#f4f4f4'
                d='M1175 0C525.8 0 0 525.8 0 1175c0 552.2 378.9 1010.5 890.1 1139.7-5.9-14.7-8.8-35.3-8.8-55.8v-199.8H734.4c-79.3 0-152.8-35.2-185.1-99.9-38.2-70.5-44.1-179.2-141-246.8-29.4-23.5-5.9-47 26.4-44.1 61.7 17.6 111.6 58.8 158.6 120.4 47 61.7 67.6 76.4 155.7 76.4 41.1 0 105.7-2.9 164.5-11.8 32.3-82.3 88.1-155.7 155.7-190.9-393.6-47-581.6-240.9-581.6-505.3 0-114.6 49.9-223.3 132.2-317.3-26.4-91.1-61.7-279.1 11.8-352.5 176.3 0 282 114.6 308.4 143.9 88.1-29.4 185.1-47 284.9-47 102.8 0 196.8 17.6 284.9 47 26.4-29.4 132.2-143.9 308.4-143.9 70.5 70.5 38.2 261.4 8.8 352.5 82.3 91.1 129.3 202.7 129.3 317.3 0 264.4-185.1 458.3-575.7 499.4 108.7 55.8 185.1 214.4 185.1 331.9V2256c0 8.8-2.9 17.6-2.9 26.4C2021 2123.8 2350 1689.1 2350 1175 2350 525.8 1824.2 0 1175 0z'
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
