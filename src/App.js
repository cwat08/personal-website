import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import ProjectList from './components/ProjectList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <h1 className="App-title">Claire's Site</h1>
        </header>
        <ProjectList />
        <Resume />
      </div>
    )
  }
}

export default App
