import React, { Component, PropTypes } from "react"
import Link from "react-router/lib/Link"
import dateFormat from "dateformat"

export default class BlogHeader extends Component {
  render() {
      // eslint-disable-next-line no-console
      console.log( dateFormat(this.props.head.date, 'ddd, dd mmm yyyy') )
    return (
      <div className="post fade-oc container">
        <div className="row mt-5 fade-oc" id="posthead">
          <div className="col-md-10 col-lg-10 offset-lg-1 offset-md-1 mt-5">
            <ul className="post-meta" id="top">
              <li><Link className="line" to={ this.props.head.authorlink }>{ this.props.head.author }</Link></li>
              <li>{ dateFormat(this.props.head.date, 'dddd dd mmmm yyyy') }</li>
              <li>{ this.props.head.category }</li>
            </ul>
            <h1 className="post">{ this.props.head.title }</h1>
            <figure className="image">
              <Link className="credit" to={ this.props.head.creditlink }>{ this.props.head.credit }</Link>
              <Link className="hover-shadow" target="_BLANK" to={ this.props.head.image } title={ this.props.head.caption }>
                <img alt={ this.props.head.caption } src={ this.props.head.image } className="img img-responsive" />
              </Link>
              <figcaption> 
                <span className="caption">{ this.props.head.caption }</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    )
  }
}

BlogHeader.propTypes = {
  head : PropTypes.object.isRequired,
}

