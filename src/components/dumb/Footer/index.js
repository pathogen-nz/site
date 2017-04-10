import React from "react"

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="skew">
        <div className="footer-inner">
          <div className="container">
            <div className="row">
              <div className="col text-right">
                <span className="text-uppercase on-bg"><b>{ "freesewing" }</b></span>
                <ul className="social">
                  <li><a className="on-bg" href="https://gitter.im/freesewing/freesewing">{ "On Gitter " }<i className="icon-gitter" aria-hidden="true"></i></a></li>
                  <li><a className="on-bg" target="_BLANK" href="https://github.com/freesewing">{ "On GitHub " }<i className="icon-github" aria-hidden="true"></i></a></li>
                  <li><a className="on-bg" target="_BLANK" href="https://twitter.com/intent/follow?screen_name=freesewing_org">{ "On Twitter " }<i className="icon-twitter" aria-hidden="true"></i></a></li>
                  <li><a className="on-bg" target="_BLANK" href="https://www.instagram.com/freesewing_org/">{ "On Instagram " }<i className="icon-instagram" aria-hidden="true"></i></a></li>
                </ul>
              </div>
              <div className="col">
                <span className="text-uppercase on-bg"><b>{ "joost" }</b></span>
                <ul className="social">
                  <li><a className="on-bg" target="_BLANK" href="https://twitter.com/intent/follow?screen_name=j__st"><i className="icon-twitter" aria-hidden="true"></i>{ " On Twitter" }</a></li>
                  <li><a className="on-bg" target="_BLANK" href="https://www.instagram.com/joostdecock/"><i className="icon-instagram" aria-hidden="true"></i>{ " On Instagram" }</a></li>
                  <li><a className="on-bg" target="_BLANK" href="https://www.facebook.com/j00st"><i className="icon-facebook" aria-hidden="true"></i>{ " On Facebook" }</a></li>
                  <li><a className="on-bg" href="mailto:joost@decock.org"><i className="icon-gitter" aria-hidden="true"></i>{ " Via Email" }</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div id="copyright" className="on-bg">
            { "Freesewing is a labour of love by Joost De Cock and " }
            <a className="on-bg" href="/contributors">{ "contributors" }</a>
            <br />
            <a className="on-bg" href="/license">{ "License info" }</a>{ " | " }<a className="on-bg" href="/contact">{ "Contact info" }</a>
            <br />
          </div>
          <div id="improve" className="text-center">
            <a href={ "fixme" } target="_BLANK" className="on-bg"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;{ " Improve this page" }</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
