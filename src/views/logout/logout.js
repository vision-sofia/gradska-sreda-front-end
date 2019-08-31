import { connect } from 'react-redux'
import { userActions } from '../../_actions';
import { Component } from 'react';

class LogoutPage extends Component {
  componentWillMount() {
    this.props.dispatch(userActions.logout());
    this.props.history.push('/');
  }

  render() {
    return null;
  }
};

export default connect()(LogoutPage);
