import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navebar from './components/Navebar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pagesize = 15
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }
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

        <Router >
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Navebar mode={this.state.mode} toggleMode={this.toggleMode} />
          <Routes >
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general " pagesize={this.pagesize} country="in" category="general" mode={this.state.mode} />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pagesize={this.pagesize} country="in" category="business" mode={this.state.mode} />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pagesize={this.pagesize} country="in" category="entertainment" mode={this.state.mode} />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pagesize={this.pagesize} country="in" category="health" mode={this.state.mode} />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pagesize={this.pagesize} country="in" category="science" mode={this.state.mode} />} />

            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pagesize={this.pagesize} country="in" category="sports" mode={this.state.mode} />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pagesize={this.pagesize} country="in" category="technology" mode={this.state.mode} />} />
          </Routes>
        </Router>

      </>
    );
  }
}
