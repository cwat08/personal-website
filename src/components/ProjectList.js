import React from 'react'
import SingleProject from './SingleProject'

const projects = [
  {
    title: 'Burst',
    description:
      'A bipartisan app that helps users burst their political filter bubble',
    technologies: [
      'React-Redux',
      'Node.js',
      'Express',
      'PostgreSQL',
      'OpenTok',
      'News API',
      'Passport'
    ],
    image: './burst.jpg',
    url: 'https://burst-acs.herokuapp.com/'
  },
  {
    title: 'MAD GIPHS',
    description: 'A web game to find the perfect GIF',
    technologies: ['React', 'Node.js', 'Web-Speech API', 'GIPHY Search API'],
    image: './mad-giphs.jpg',
    url: 'https://mad-giphs.herokuapp.com/'
  },
  {
    title: 'Codebrary',
    description: 'An e-commerce website that sells coding books',
    technologies: [
      'Node.js',
      'Express',
      'React',
      'Redux',
      'PostgreSQL',
      'Stripe API',
      'Mocha, Chai'
    ],
    image: './codebrary.jpg',
    url: 'https://codebrary.herokuapp.com/'
  }
]

const ProjectList = props => {
  return (
    <div className="project-list">
      {projects.map((project, i) => {
        return <SingleProject project={project} index={i} />
      })}
    </div>
  )
}
export default ProjectList
