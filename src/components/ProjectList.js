import React from 'react'
import SingleProject from './SingleProject'

const projects = [
  {
    title: 'Burst',
    description: 'Bipartisan web app to burst your filter bubble',
    image: './Mad_giphs_image.png'
  }
]

const ProjectList = props => {
  return projects.map(project => {
    return <SingleProject project={project} />
  })
}
export default ProjectList
