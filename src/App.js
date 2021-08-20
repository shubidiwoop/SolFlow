import React, { Component } from 'react';
import Home from './pages/home';
import SignUp from './pages/SignUp';
import Vendor from './pages/vendor';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import User from './pages/user';



class App extends Component {
  render() {
    return (

      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} exact />
            <Route exact path="/signin" component={SignUp} />
            <Route exact path="/user" component={User} />
            <Route exact path="/vendor" component={Vendor} />
          </Switch>
        </Router>
      </div>
    );
  };
}


export default App;
