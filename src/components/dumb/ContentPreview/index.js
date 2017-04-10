import React, { PropTypes } from "react"
import { Link } from "phenomic"

const ContentPreview = ({ __url, linktitle, title, description, blurb, layout, image, caption }) => {

  let cardimg = ''
  if(layout === 'Post') {
      cardimg = <Link to={ __url }><img src={ __url + image} alt={caption} className="card-img-top" /></Link>
  }
  
  return (
    <div className="card">
      { cardimg || '' }
      <div className="card-block">
        <h3 className="card-title">
          <Link to={ __url }>
            { linktitle || title }
          </Link>
        </h3>
        <p className="card-text">
          { blurb || description }
          <br />
          <small>
          <Link to={ __url }>{ __url}</Link>
          </small>
        </p>
      </div>
    </div>
  )
}

ContentPreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  linktitle: PropTypes.string,
  description: PropTypes.string,
  blurb: PropTypes.string,
  layout: PropTypes.string,
  image: PropTypes.string,
  caption: PropTypes.string,
}

export default ContentPreview
