import React, { Component, PropTypes } from "react"

export default class TocMenu extends Component {

  render() {
    return (
            <div id="oc-right-wrapper">
                <a className="oc-toggle right burger" id="tocburger">
                    <i className="fa fa-2x fa-align-left" aria-hidden="true"></i>
                </a>
                <span className="oc-overlay"></span>
                <section id="toc" className="sticky">
                    <div id="oc-right" className="oc-panel" data-side="right">
                        <h2 id="toc-title" name="toc">{ "Contents" }</h2>
                        <div id="toc-ul" className="toc" dangerouslySetInnerHTML={ { __html: this.props.toc } } />
                    </div>
                </section>
            </div> 
        )
  }
}

TocMenu.propTypes = {
  toc: PropTypes.string.isRequired,
}

