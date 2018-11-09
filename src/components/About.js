import React from 'react'
import Contact from './Contact'
import Player from './ReactPlayerTest'

const About = () => {
  return (
    // <div className="about-page">
    <div className="about">
      <div className="headshot-container">
        <img className="headshot" src="./headshot_final.png" align="left" />
        <br />
      </div>
      <div id="all-about-text">
        <div className="about-text">
          <h2>Hi I'm Claire, </h2>
          <p>
            An events producer turned software engineer, passionate about
            solving complex problems through creating elegant and well-designed
            software.{' '}
          </p>
          <p>
            After studying neuroscience and film, I spent time producing live
            events in the entertainment and media industries. After a while, I
            found I wanted to work on something more tangible and happened to
            try a coding course on Codeacademy, and was instantly hooked! I love
            building scalable and well-designed apps that are efficient under
            the hood, while also delivering seamless user experiences.
          </p>
        </div>
        {/* <div id="about-contact"> */}
        <Contact />
        {/* </div> */}
      </div>
    </div>
  )
}

export default About
