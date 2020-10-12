import React from 'react';
import './Resume.css';

function Resume() {
  const data = {
    education: [
      {
        "school": "AMA University",
        "degree": "Bachelors of Science in Information Technology",
        "graduated": "May 2013"
      },
      {
        "school": "DICT Coding Bootcamp",
        "degree": "Specialization in Software Development",
        "graduated": "April 2018 - Sept 2018"
      }
    ],
    works: [
      {
        "company": "One Oasis Holdings",
        "title": "Team Member | Software Developer",
        "years": "Sept 2019 - March 2020",
        "description": "Developing Web App using MERN Stack."
      },
      {
        "company": "Union Bank of the Philippines",
        "title": "Blockchain Cadet",
        "years": "Oct 2019 - April 2020",
        "description": "Extensive Training in different Blockchain Technologies."
      },
      {
        "company": "Monaco1 International Inc.",
        "title": "IT Technical Support - Team Leader",
        "years": "Feb 2016 - April 2018",
        "description": "Provides fast Technical and Administrative support to the client"
      }
    ],
    skills: [
      {
        "name":"HTML5",
        "level":"70%"
      },
      {
        "name":"CSS",
        "level":"50%"
      },
      {
        "name":"Vanilla Javascript",
        "level":"60%"
      },
      {
        "name":"NodeJS",
        "level":"70%"
      },
      {
        "name":"ReactJS",
        "level":"70%"
      },
      {
        "name":"MongoDB",
        "level":"70%"
      },
      {
        "name":"Adobe Photoshop",
        "level":"50%"
      }
    ]
  }
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {data.education.map(educ => {
                return (
                  <div key={educ.school}><h3>{educ.school}</h3>
                  <p className="info">{educ.degree} <span>&bull;</span><em className="date">{educ.graduated}</em></p>
                  <p>{educ.description}</p></div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
          {data.works.map(work => {
            return (
              <div key={work.company}><h3>{work.company}</h3>
              <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
              <p>{work.description}</p>
        </div>
            )
          })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
            <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
            <p>
              During our bootcamp, we learned different programming languages and technologies, Doing some basic syntax in it and building some nice applications with those technologies, But these technologies are the ones I want to practice and master first.
            </p>
          <div className="bars">
            <ul className="skills">
              {data.skills.map(skill => {
                let className = `bar-expand ${skill.name.toLowerCase()}`;
                return (
                  <li key={skill.name}><span style={{width:skill.level}} className={className}></span><em>{skill.name}</em></li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
