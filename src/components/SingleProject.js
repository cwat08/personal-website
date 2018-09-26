import React from 'react'
import { Link } from 'react-router-dom'

const SingleProject = props => (
  <div className="single-project">
    <a href={props.project.url}>
      <div>
        <h1 className="project-title">{props.project.title}</h1>
        <img className="project-image" src={props.project.image} />
        <p className="project-description"> {props.project.description}</p>
        <p className="project-technologies">{props.project.technologies}</p>
      </div>
    </a>
  </div>
)

export default SingleProject
