import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Button from "../../components/Button"

const PagePreview = ({ __url, linktitle, title, date, description }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div>
      <Link to={ __url }>
        { linktitle || title }
      </Link>
      <div>
        {
          pageDate &&
            <time key={ pageDate.toISOString() }>
              { pageDate.toDateString() }
            </time>
        }
      </div>
      <div>
        { description }
        { " " }
      </div>
      <Link to={ __url }>
        <Button secondary>{ "Read More →" }</Button>
      </Link>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  linktitle: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
}

export default PagePreview
