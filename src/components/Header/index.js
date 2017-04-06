import React, { Component, PropTypes } from "react"
import Link from "react-router/lib/Link"
import TitleStripe from "../TitleStripe"

export default class Header extends Component {
  render() {
    if (this.props.style === "blog") {
      return (
        <header className="page-header fade-oc">
          <div id="top-logo">
            <Link href="/" title="To the homepage">
              <img src="/assets/img/logo/logo-black.svg" alt="The freesewing logo" />
            </Link>
          </div> 
        </header>
      )
    }
    else if (this.props.style === "spread") {
      return (
        <header className="page-header fade-oc">
          <div id="home-logo">
            <div id="home-logo-background" className="bg-thematic"></div>
            <Link href="/" title="To the homepage">
              <img src="/assets/img/logo/logo-cutout.svg" alt="The freesewing logo" />
            </Link>
          </div> 
          <TitleStripe title={ this.props.title } />
        </header>
      )
    }
    return (
      <header className="page-header fade-oc">
        <div id="top-logo">
          <Link href="/" title="To the homepage">
            <img src="/assets/img/logo/logo-black.svg" alt="The freesewing logo" />
          </Link>
        </div> 
        <TitleStripe narrow title={ this.props.title } />
      </header>
    )
  }
}

Header.propTypes = {
  title : PropTypes.string.isRequired,
  style : PropTypes.string.isRequired,
}

