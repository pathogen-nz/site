import React, { PropTypes } from "react"

import ContentPreview from "../ContentPreview"

const ContentList = ({ pages }) => {
  return (
    <div>
      {
      pages.length
      ? (
        <div>
          {
          pages.map((page) => (
            <div key={ page.title } className="page-preview hover-shadow"><ContentPreview { ...page } /></div>
          ))
        }
        </div>
      )
      : "No posts yet."
    }
    </div>
  )
}

ContentList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default ContentList
