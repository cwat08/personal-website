import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import ProjectList from './components/ProjectList'
import Routes from './routes'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <header className="App-header">
          <h1 className="App-title">Claire's Site</h1>
        </header> */}
        <div className="container">
          <Routes />
        </div>
        <footer>
          <Contact />
          <div className="copyright">
            <h4 className="copyright">&copy; 2018 CW</h4>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
