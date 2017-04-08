import React, { Component, PropTypes } from "react"
import Link from "react-router/lib/Link"

export default class TocMenu extends Component {

  render() {
    return (
            <div id="oc-right-wrapper">
                <a className="oc-toggle right burger" id="tocburger">
                    <i id="tocburger-icon" className="icon-toc" aria-hidden="true"></i>
                </a>
                <span className="oc-overlay"></span>
                <section id="toc" className="sticky">
                    <div id="oc-right" className="oc-panel" data-side="right">
                        <h3 id="toc-title" name="toc" className="mt-5">{ "Contents" }</h3>
                        <div id="toc-ul" className="toc" dangerouslySetInnerHTML={ { __html: this.props.toc } } />
                        <Link to="#top" >{ "Back top top" }</Link>
                    </div>
                </section>
            </div> 
        )
  }
}

TocMenu.propTypes = {
  toc: PropTypes.string.isRequired,
}

