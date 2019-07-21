import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/mozilla-wordmark.svg'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={logo} width="112" height="32" alt="mozilla logo" />
              <span id="mozilla-india-wordmark"> india &nbsp;</span>
            </Link>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start">
              <a className="navbar-item" href="https://blog.mozillaindia.org">
                Blog
              </a>
              <a className="navbar-item" href="https://foundation.mozilla.org">
                Foundation
              </a>
              <a className="navbar-item" href="https://mozilla.org">
                Global
              </a>
              <a
                className="navbar-item"
                href="https://activate.mozilla.community/"
              >
                Activate
              </a>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
