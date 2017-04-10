import React, { Component } from "react"

export default class Hamburger extends Component {

  render() {
    return (
            <a className="oc-toggle left burger" id="hamburger">
                <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
            </a>
        )
  }
}

