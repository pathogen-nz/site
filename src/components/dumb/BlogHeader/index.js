import React, { PropTypes } from "react"
import { Link } from "phenomic"
import dateFormat from "dateformat"

const BlogHeader = ({head}) => {
  return (
    <div className="post container">
      <div className="row mt-5" id="posthead">
        <div className="col-md-10 col-lg-10 offset-lg-1 offset-md-1 mt-5">
          <ul className="post-meta" id="top">
            <li><Link className="line" to={ head.authorlink }>{ head.author }</Link></li>
            <li>{ dateFormat(head.date, 'dddd dd mmmm yyyy') }</li>
            <li>{ head.category }</li>
          </ul>
          <h1 className="post">{ head.title }</h1>
          <figure className="image">
            <Link className="credit" to={ head.creditlink }>{ head.credit }</Link>
            <Link className="hover-shadow" target="_BLANK" to={ head.image } title={ head.caption }>
              <img alt={ head.caption } src={ head.image } className="img img-responsive" />
            </Link>
            <figcaption> 
              <span className="caption">{ head.caption }</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

BlogHeader.propTypes = {
  head : PropTypes.object.isRequired,
}

export default BlogHeader;
