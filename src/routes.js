import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'

import { ProjectList, Resume, Home, About } from './components'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={ProjectList} />
        <Route path="/resume" component={Resume} />
        <Route path="/" component={About} />
        <Route component={About} />
      </Switch>
    </div>
  )
}

export default withRouter(Routes)
