import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navebar from './components/Navebar';
import News from './components/News';

export default class App extends Component {
  pagesize = 15
constructor() {
  super();
  this.state = {
    mode: 'light'
  };
}

  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({ mode: 'dark' });
      
      document.body.style.backgroundColor = '#263238';
    } else {
      this.setState({ mode: 'light' });
      document.body.style.backgroundColor = 'white';
    }
  };

  render() {
    
    return (
      <>
        <div>
          <Router >
            <Navebar mode={this.state.mode} toggleMode={this.toggleMode} />
            <Routes >
              <Route path="/" element={<News pagesize={this.pagesize} country="in" category="general" mode={this.state.mode}  />} />
              <Route path="/business" element={<News pagesize={this.pagesize} country="in" category="business" mode={this.state.mode}  />} />
              <Route path="/entertainment" element={<News pagesize={this.pagesize} country="in" category="entertainment" mode={this.state.mode} />} />
              <Route path="/health" element={<News pagesize={this.pagesize} country="in" category="health" mode={this.state.mode} />}  />
              <Route path="/science" element={<News pagesize={this.pagesize} country="in" category="science" mode={this.state.mode} />} />
              <Route path="/sports" element={<News pagesize={this.pagesize} country="in" category="sports" mode={this.state.mode} />}  />
              <Route path="/technology" element={<News pagesize={this.pagesize} country="in" category="technology" mode={this.state.mode} />} />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}
