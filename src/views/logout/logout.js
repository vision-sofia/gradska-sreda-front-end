import { connect } from 'react-redux'
import { userActions } from '../../_actions';
import { Component } from 'react';
import config from '../../config/config';

class LogoutPage extends Component {
  componentWillMount() {
    this.props.dispatch(userActions.logout());
    // window.location.hash = config.appUrls.login.hash;
  }

  render() {
    return null;
  }
};

export default connect()(LogoutPage);
