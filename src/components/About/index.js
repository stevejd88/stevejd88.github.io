import React from "react";
import Me from "../../assets/img/me-417.jpg";

import "./about.scss";

const About = () => {
  return (
    <section id='about'>
      <h1 className='animate__animated animate__fadeInLeft'>About Me</h1>
      <div className='about-cont'>
        <div className='about-text animate__animated animate__fadeInDown'>
          <p>
            Thanks for dropping in. My name is Steven and I am a full-stack
            developer with an emphasis in front-end development.
          </p>
          <p>
            I love to create websites. I am a self taught developer. When I'm
            not learning more about web development I am hiking, traveling,
            reading, and being mindful.
          </p>
        </div>
        <img
          src={Me}
          className='img-fluid animate__animated animate__fadeInDown'
          alt='me'
        ></img>
      </div>
    </section>
  );
};

export default About;
