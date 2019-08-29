import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import LogoutIcon from '@material-ui/icons/HighlightOff';
import VpnKeyIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from 'react-router-dom';
import ImgLogo from '../../assets/img/logo.png';
import './header.scss';

const drawerWidth = 240;

const styles = theme => ({});

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.state={
    //     anchor: 'left',
    // }
  }

  render() {
    // const { classes } = this.props;
    // const { anchor } = this.state;

    return (
      <header id="app-header" className="app-header active fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container p-0 ">
            <a className="app-header-logo__container" href="">
              <img className="app-header-logo" src={ImgLogo} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsingNavbar"
              aria-controls="collapsingNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse" id="collapsingNavbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="map">
                    <HomeIcon /> Карта
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="info">
                    Информация
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="about"
                  >
                    За платформата
                  </a>
                </li>
               
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-cog"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="logout">
                    <LogoutIcon /> Изход
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  " href="login">
                    <VpnKeyIcon /> Вход
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
