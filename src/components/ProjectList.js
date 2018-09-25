import React from 'react'
import SingleProject from './SingleProject'

const projects = [
  {
    title: 'Burst',
    description: 'Bipartisan web app to burst your filter bubble',
    image: './Mad_giphs_image.png'
  },
  {
    title: 'MAD GIPHS',
    description: 'find cool GIFs!',
    image: './Mad_giphs_image.png'
  },
  {
    title: 'Codebrary',
    description: 'a site to buy coding books',
    image: './Mad_giphs_image.png'
  }
]

const ProjectList = props => {
  return (
    <div className="project-list">
      {projects.map(project => {
        return <SingleProject project={project} />
      })}
    </div>
  )
}
export default ProjectList
