import React, { Component } from "react"
import Link from "react-router/lib/Link"

export default class MainMenu extends Component {

  render() {
    return (
            <div id="oc-left-wrapper">
                <span className="oc-overlay"></span>
                <a className="oc-toggle left burger" id="hamburger">
                    <i className="icon-menu" aria-hidden="true" id="hamburger-icon"></i>
                </a>
                <div id="oc-left" className="oc-panel" data-side="left">
                    <h4>{ "Documentation" }</h4>
                    <ul>
                        <li><Link href="/designer">{ "For designers" }</Link></li>
                        <li><Link href="/developer">{ "For developers" }</Link></li>
                        <li><Link href="/contribute">{ "For contributors" }</Link></li>
                    </ul>
                </div> 
            </div> 
        )
  }
}
