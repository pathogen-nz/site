import React, { Component, PropTypes } from "react"
import Link from "react-router/lib/Link"

export default class Header extends Component {
  render() {
    return (
      <header className="header" id="header">
        <div className="skew">
          <div className="header-inner">
            <div id="top-logo">
              <Link className="on-bg" to="/" title="Home" >
                <img src="/assets/img/logo/logo-white.svg" alt="The freesewing logo" className="img img-responsive" />
              </Link>
            </div>
            <div className="masthead">
              <span id="masthead-main">
                <Link className="on-bg" to="/" title="Home" >{"freesewing"}</Link>
              </span>
              <span id="masthead-sub">
                <Link to="/" className="on-bg" title="Home" >{"an open source platform for made-to-measure sewing patterns"}</Link>
              </span>
              <ul className="mini-menu"> 
                <li><Link to="/about"  className="on-bg" activeClassName="active">{"About"}</Link></li>
                <li><Link to="/donate" className="on-bg" activeClassName="active">{"Donate"}</Link></li>
                <li><Link to="/gitter" className="on-bg" activeClassName="active">{"Talk to us"}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  title : PropTypes.string.isRequired,
  style : PropTypes.string.isRequired,
}

