import React from "react";
import SiteList from "../../data/sites";

import "./portfolio.scss";

const Portfolio = () => {
  const onClick = (e) => {
    e.preventDefault();
    const you = e.target.parentNode.parentNode;
    you.classList.add("flip");
    console.log(you);
    setTimeout((e) => {
      you.classList.remove("flip");
    }, 15000);
  };

  let sites = SiteList.map((site) => {
    return (
      <li className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <figure>
              <img src={site.img} className='img-fluid' alt='site preview' />

              <figcaption>
                <h3>{site.siteName}</h3>
              </figcaption>
            </figure>
            <div className='skill-div'>
              {site.skills.map((skill) => {
                return <span>{skill} </span>;
              })}
            </div>

            <button type='button' onClick={onClick}>
              Learn More
            </button>
          </div>

          <div className='flip-card-back'>
            <p>{site.sum}</p>
            {site.youtube ? (
              <a
                className='youtube'
                href={site.youtube}
                target='_blank'
                without
                rel='noopener noreferrer'
              >
                Video Preview
              </a>
            ) : null}
            <div className='view'>
              <a
                href={site.site}
                target='_blank'
                without
                rel='noopener noreferrer'
              >
                {" "}
                Website
              </a>
              <a
                href={site.gitHub}
                target='_blank'
                without
                rel='noopener noreferrer'
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </li>
    );
  });

  return (
    <section id='portfolio'>
      <div className='head-wrapper'>
        <h1 className='tagline animate__animated animate__fadeInLeft'>
          Portfolio
        </h1>
      </div>

      <ul className='animate__animated animate__fadeInUp'>{sites}</ul>
    </section>
  );
};

export default Portfolio;
