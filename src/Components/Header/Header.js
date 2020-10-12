import React from 'react';
import './Header.css';

function Header() {
  const data = {
    socialNetworks: [
      {
        "name": "facebook",
        "url": "https://www.facebook.com/phengzkie",
        "className": "fa fa-facebook"
      },
      {
        "name": "linkedin",
        "url": "https://www.linkedin.com/in/alfie-osayan",
        "className": "fa fa-linkedin"
      },
      {
        "name": "github",
        "url": "http://github.com/phengzkie",
        "className": "fa fa-github"
      }
    ]
  }
  return (
    <header id="home">
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

      <ul id="nav" className="nav">
        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
        <li><a className="smoothscroll" href="#about">About</a></li>
        <li><a className="smoothscroll" href="#resume">Resume</a></li>
        <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
        <li><a className="smoothscroll" href="#contact">Contact</a></li>
      </ul>
    </nav>

    <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Hi, I'm Alfie Osayan.</h1>
            <h3>I'm a Manila based <span>Web Developer</span>. Full Stack Developer using MERN Stack.</h3>
            <hr />
            <ul className="social">
               {data.socialNetworks.map(socialNetwork => {
                return <li key={socialNetwork.name}><a href={socialNetwork.url}><i className={socialNetwork.className}></i></a></li>
               })}
            </ul>
         </div>   
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
    </header>
  )
}

export default Header
