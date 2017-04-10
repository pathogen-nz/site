import React, { Component } from "react"

export default class Scroller extends Component {

  render() {
    return (
      <div id="scroller" >
        <a className="scroll-to-top" title="Back to top">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </a>
      </div>
    )
  }
}
