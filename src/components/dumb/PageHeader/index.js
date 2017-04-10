import React, { Component, PropTypes } from "react"
import { Link } from "phenomic"

export default class PageHeader extends Component {
  render() {
      let meta = ''
      if(this.props.head.section === 'classdocs') {
        meta = <ul className="page-meta" id="top">
          <li>
            {"Class: "}
            <Link className="line" to={"FIXME"}>{ this.props.head.meta.namespace }</Link>
            {"\\"}
            { this.props.head.meta.classname }
          </li>
          <li>{"Repository: "}<Link className="line" to={ "fixme" }>{ this.props.head.meta.repository }</Link></li>
        </ul>
      } 

    return (
      <div className="page fade-oc container">
        <div className="row mt-5 fade-oc" id="pagehead">
          <div className="col mt-5">
            { meta }
            <h1 className="post">{ this.props.head.title }</h1>
          </div>
        </div>
      </div>
    )
  }
}

PageHeader.propTypes = {
  head : PropTypes.object.isRequired,
}

