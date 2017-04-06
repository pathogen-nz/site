import React, { Component } from "react"

export default class Footer extends Component {

  render() {
    return (
            <footer className="footer bg-thematic fade-oc">
                <div id="footer-logo">
                    <a href="/" title="To the homepage">
                        <img src="/assets/img/logo/logo-white.svg" alt="The freesewing logo" />
                    </a>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col text-right">
                            <span className="text-uppercase"><b>{ "freesewing" }</b></span>
                            <ul className="social">
                                <li><a href="/slack">{ "On Slack " }<i className="fa fa-slack" aria-hidden="true"></i></a></li>
                                <li><a target="_BLANK" href="https://github.com/freesewing">{ "On GitHub " }<i className="fa fa-github" aria-hidden="true"></i></a></li>
                                <li><a target="_BLANK" href="https://twitter.com/intent/follow?screen_name=freesewing_org">{ "On Twitter " }<i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a target="_BLANK" href="https://www.instagram.com/freesewing_org/">{ "On Instagram " }<i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <span className="text-uppercase"><b>{ "joost" }</b></span>
                            <ul className="social">
                                <li><a target="_BLANK" href="https://twitter.com/intent/follow?screen_name=j__st"><i className="fa fa-twitter" aria-hidden="true"></i>{ " On Twitter" }</a></li>
                                <li><a target="_BLANK" href="https://www.instagram.com/joostdecock/"><i className="fa fa-instagram" aria-hidden="true"></i>{ " On Instagram" }</a></li>
                                <li><a target="_BLANK" href="https://www.facebook.com/j00st"><i className="fa fa-facebook" aria-hidden="true"></i>{ " On Facebook" }</a></li>
                                <li><a href="mailto:joost@decock.org"><i className="fa fa-envelope-o" aria-hidden="true"></i>{ " Via Email" }</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="copyright">
                    { "Freesewing is a labour of love by Joost De Cock and " }
                    <a href="/contributors">{ "contributors" }</a>
                    <br />
                    <a href="/license">{ "License info" }</a>{ " | " }<a href="/contact">{ "Contact info" }</a>
                    <br />
                </div>
                <div id="improve" className="text-center">
                    <a href={ "fixme" } target="_BLANK"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;{ " Improve this page" }</a>
                </div>
            </footer>
        )
  }
}

