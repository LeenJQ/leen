import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {
  Knode,
  KnodeInfo
} from './pages'
import {
  Header,
  PageBody
} from './components'

class App extends Component {
  render() {
    return (
      <Router >
        <div id="app">
          <Header />
          <PageBody>
            <Route exact path={`/Knode`} component={Knode} /> 
            <Route path={`/Knode/:id`} component={KnodeInfo} /> 
          </PageBody>
        </div>
      </Router >
    );
  }
}

export default App;
