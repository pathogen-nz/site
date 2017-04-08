import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"

const defaultNumberOfPages = 20

const LatestPages = (props, { collection }) => {
  const latestPages = enhanceCollection(collection, {
    filter: { layout: "Page" },
    sort: "date",
    reverse: true,
  })
  .slice(0, props.numberOfPages || defaultNumberOfPages)

  return (
    <div>
      <h2>
        { "Latest Pages" }
      </h2>
      <PagesList pages={ latestPages } />
    </div>
  )
}

LatestPages.propTypes = {
  numberOfPages: PropTypes.number,
}

LatestPages.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestPages
