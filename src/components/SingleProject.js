import React from 'react'

const SingleProject = props => (
  <div>
    <h1 className="project-title">{props.project.title}</h1>
    <img className="project-image" src={props.project.image} />
    <p className="project-description"> {props.project.description}</p>
  </div>
)

export default SingleProject
