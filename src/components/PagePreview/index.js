import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Button from "../../components/Button"

const PagePreview = ({ __url, title, date, description }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div>
      <Link to={ __url }>
        { title }
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
  date: PropTypes.string,
  description: PropTypes.string,
}

export default PagePreview
