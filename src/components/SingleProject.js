import React from 'react'
import { Link } from 'react-router-dom'

const SingleProject = props => {
  const colored = props.index % 2 !== 0
  console.log('colored' + props.index)
  return (
    <div
      className={colored === true ? 'single-project colored' : 'single-project'}
    >
      <a href={props.project.url}>
        <div>
          <h1 className="project-title">{props.project.title}</h1>
          <img className="project-image" src={props.project.image} />{' '}
        </div>
      </a>
      <p className="project-description"> {props.project.description}</p>
      <div className="technology-list">
        {props.project.technologies.map(technology => {
          return <div className="technology">{technology}</div>
        })}
      </div>
      {/* <p className="project-technologies">{props.project.technologies}</p> */}
    </div>
  )
}

export default SingleProject
