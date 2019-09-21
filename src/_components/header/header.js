import React from 'react';
import { Link } from 'react-router-dom'
import { userActions } from '../../_actions';
import { connect } from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import LogoutIcon from '@material-ui/icons/HighlightOff';
import VpnKeyIcon from '@material-ui/icons/ArrowRightAlt';
import ImgLogo from '../../assets/img/logo.png';
import './header.scss';

const styles = theme => ({});

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = event => {
    const { dispatch } = this.props;
    dispatch(userActions.logout());
  }

  render() {
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
                  <Link className="nav-link" to="/map">
                    <HomeIcon /> Карта
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/map">
                    Информация
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/map">
                    За платформата
                  </Link>
                </li>
                {(this.props.loggedIn) && (
                  <li className="nav-item">
                    <a className="nav-link" href="/logout" onClick={(event)=>{event.preventDefault(); this.logout()}}>
                      <LogoutIcon /> Изход
                    </a>
                  </li>
                )}
                {(!this.props.loggedIn) && (
                  <li className="nav-item">
                    <a className="nav-link " href="/map#login">
                      <VpnKeyIcon /> Вход
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  const { loggedIn } = state.authentication;

  return {
     loggedIn
  };
}

export default connect(mapStateToProps)(Header);
