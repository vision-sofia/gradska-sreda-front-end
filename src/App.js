import './App.scss';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Vendor } from './vendors/vendor.component';
import { AddVendor } from './vendors/addvendor.component';
import { Login } from './login/';
import { Register } from './register/';
import { Home } from './home/';
import { history } from './_helpers';
import { PrivateRoute } from './_components';
import config from './config/config';

const HashRoute = ({ component: Component, hash, ...routeProps }) => (
  <Route
    {...routeProps}
    component={({ location, ...props }) =>
      location.hash === hash && <Component {...props} />
    }
  />
);

class App extends Component {
  constructor() {
    super();
  }

  render() {
    setTimeout(() => {
      if (!this.props.loggedIn) {
        window.location.hash = config.appUrls.login.hash;
      }
    });

    return (
      <div className='App'>
        <Router history={history}>
          <div>
            <HashRoute
              hash='#login'
              component={Login}
            />
            <HashRoute hash='#register' component={Register} />
            <Switch>
              <PrivateRoute exact path='/vendor' component={Vendor} />
              <PrivateRoute exact path='/add-vendor' component={AddVendor} />
              <PrivateRoute
                exact
                path='/edit-vendor/:id'
                component={AddVendor}
              />
              <Route exact path='/map'>
                <main
                  className={
                    'App-container ' + (this.props.loggedIn ? null : 'blur')
                  }
                >
                  <Home />
                </main>
              </Route>
              <Redirect from='/' to='/map' />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loggedIn } = state.authentication;

  return {
    loggedIn
  };
};

export default connect(mapStateToProps)(App);
