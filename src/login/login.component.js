import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { history } from '../_helpers';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import './login.component.scss'
import { Card } from '@material-ui/core';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    container: {
        // display: 'flex',
        // flexWrap: 'wrap',
    },
    margin: {
    //   margin: theme.spacing.unit,
    },
    withoutLabel: {
    //   marginTop: theme.spacing.unit * 3,
    },
    textField: {
        // marginLeft: theme.spacing.unit,
        // marginRight: theme.spacing.unit,
        // width: 200,
    },
    paper: {
        // padding: theme.spacing.unit * 2,
        // textAlign: 'center',
        // color: theme.palette.text.secondary,
    },

    button: {
        // margin: theme.spacing.unit,
    },

    input: {
        // display: 'none',
    },
  });

  
class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            showPassword: false,
        }
    }

    componentDidMount() {
        console.log(this.props);
        if(localStorage.getItem('auth')){
            history.push('/home');
        }
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    login = event =>{
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

   render() {
      const { classes } = this.props;
      return (
        <div className="login-container">
            <div className="login col-sm-9 col-md-7 col-lg-5 m-auto">
                <h1 className="login-title">{'Вход'}</h1>
                <div className="card">
                    <form className="card-body">
                        <div className="form-group">
                            <label htmlFor="login_username">Потребителско име</label>
                            <input id="login_username" 
                            label="Потребителско име или email"
                            value={this.state.username}
                            className="form-control"
                            onChange ={this.handleChange('username')}
                            placeholder="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="login_password">Парола</label>
                            <input id="login_password" 
                            label="Парола"
                            autoComplete="current-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            className="form-control"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            type="password" name="_password" 
                            placeholder="***"/>
                        </div>
                        <div className="custom-control custom-checkbox mb-3 text-right">
                            <input type="checkbox" name="_remember_me" className="custom-control-input" id="remember_me"/>
                            <label className="custom-control-label" htmlFor="remember_me">Запомни ме</label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" onClick={(event)=>{this.login()}}>
                            Вход
                        </button>
                    </form>
                </div>
            </div>
        </div>
      );
   }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
const mapStateToProps = (state) =>{
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Login)));

export { connectedLoginPage as Login };