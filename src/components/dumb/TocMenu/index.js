import React, { Component, PropTypes } from "react"
import { Link } from "phenomic"
import Icon from "../Icon"

export default class TocMenu extends Component {

  render() {
    return (
            <div id="oc-right-wrapper">
                <Link to={"#"} className="oc-toggle right burger" id="tocburger">
                    <Icon name={"toc"} size={38} />
                </Link>
                <span className="oc-overlay"></span>
                <section id="toc" className="sticky">
                    <div id="oc-right" className="oc-panel" data-side="right">
                        <h3 id="toc-title" name="toc" className="mt-5">{ "Contents" }</h3>
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

