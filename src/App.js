import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import ProjectList from './components/ProjectList'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <header className="App-header">
          <h1 className="App-title">Claire's Site</h1>
        </header> */}
        <div>
          <Routes />
        </div>
        <footer className="footer">
          <p className="text-center">&copy; 2018 CW</p>
        </footer>
      </div>
    )
  }
}

export default App
