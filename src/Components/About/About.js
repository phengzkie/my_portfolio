import React from 'react';
import './About.css';

import ProfilePic from '../../Images/profile_pic.jpg';

function About() {

  return (
    <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={ProfilePic} alt="profile_pic" />
         </div>
         <div className="nine columns main-col">
            <h2>More About Me</h2>

            <p>I am a tech person, with a passion for gaming and technology. A former Tech Support Specialist that shift career into coding. After 4 years of experience as a Technical Support, I attended a Software Development Specialization Bootcamp sponsored by the Department of Communications and Technology. I pursued my first development job to kick off my career. Got a job as Full Stack Developer for 8 months, and now planning to pursue Full Stack Development using MERN Stack.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Alfie Osayan</span><br />
						   <span>
						         Muntinlupa City, Metro Manila 1770
                   </span><br />
						   <span>+63 9455870014</span><br />
                     <span>alfie.osayan@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default About
