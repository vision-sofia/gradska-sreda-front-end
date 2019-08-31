import React, { Component } from 'react';
import './App.scss';
import { Router, Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { Vendor } from './vendors/vendor.component';
import { AddVendor } from './vendors/addvendor.component'
import  { Login } from './login/';
import { Home } from './home/';
import { history } from './_helpers';
import { PrivateRoute } from './_components';
import LogoutPage from './views/logout/logout'

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>            
              <Switch>
                {/* <PrivateRoute exact path='/home' component={Home} /> */}
                <PrivateRoute exact path='/vendor' component={Vendor} />
                <PrivateRoute exact path='/add-vendor' component={AddVendor} />
                <PrivateRoute exact path='/edit-vendor/:id' component={AddVendor} />
                <Route exact path='/home'>
                  <Login />
                  <main className={'App-container ' + (this.props.loggedIn ? null : 'blur')}>
                    <Home />
                  </main>
                </Route>
                <Route path='/logout' component={LogoutPage} />
                <Redirect from="/" to='/home'/>
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  
  const { loggedIn } = state.authentication;

  return {
     loggedIn
  };
}

export default connect(mapStateToProps)(App);