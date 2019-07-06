import React from "react"
import logo from '../images/mozilla-wordmark.svg'


const Header = () => (
  <header>
    <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://mozillaindia.org">
                    <img src={logo} width="112" height="32" alt="mozilla logo" /><span id="mozilla-india-wordmark"> india &nbsp;</span>
                </a>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
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
                    <a className="navbar-item" href="https://activate.mozilla.community/">
                        Activate
                    </a>
                </div>
            </div>
        </nav>
  </header>
)

export default Header
