import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { userActions } from "../_actions";
import { history } from "../_helpers";
import { withRouter, Link } from "react-router-dom";
import "./register.component.scss";

const styles = theme => ({});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPassword: false,
      loggedIn: false
    };
  }

  componentDidMount() {}

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  register = event => {
    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.register(username, password));
    }
  };

  render() {
    const { classes } = this.props;
    return !this.props.loggedIn ? (
      <div className="register-container">
        <div className="register col-sm-9 col-md-7 col-lg-5 m-auto">
          <h1 className="register-title">Регистрация</h1>
          <div className="card">
            <div className="card-body">
              <form name="user_register" method="post" novalidate="novalidate">
                <div className="form-group">
                  <label htmlFor="login_username">Потребителско име</label>
                  <input
                    type="text"
                    id="user_register_username"
                    name="user_register[username]"
                    required="required"
                    placeholder=""
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="login_password">Парола</label>
                  <input
                    type="password"
                    id="user_register_plainPassword_first"
                    name="user_register[plainPassword][first]"
                    required="required"
                    placeholder=""
                    className="form-control input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="login_password">Повторете паролата</label>
                  <input
                    type="password"
                    id="user_register_plainPassword_second"
                    name="user_register[plainPassword][second]"
                    required="required"
                    placeholder=""
                    className="form-control input"
                  />
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="user_register_agreeTerms"
                      name="user_register[agreeTerms]"
                      required="required"
                      className="custom-control-input"
                      value="1"
                    />
                    <label
                      className="checkbox-custom custom-control-label required"
                      htmlFor="user_register_agreeTerms"
                    >
                      Приемам условията за ползване
                    </label>
                  </div>
                </div>
                <Link className="nav-link" to="#login">
                  Вече си регистриран?
                </Link>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block"
                >
                  Регистрирай ме
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { loggedIn } = state.authentication;

  return {
    loggedIn
  };
};

const connectedRegisterPage = withRouter(
  connect(mapStateToProps)(withStyles(styles)(Register))
);

export { connectedRegisterPage as Register };
