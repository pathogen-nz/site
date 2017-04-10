import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import ContentList from "../../components/ContentList"

const defaultNumber = 10

const LatestByLayout = (props, { collection }) => {
  const latest = enhanceCollection(collection, {
    filter: { layout: props.layout },
    sort: "date",
    reverse: true,
  })
  .slice(0, props.limit || defaultNumber)
  
  return (
      <ContentList pages={ latest } />
  )
}

LatestByLayout.propTypes = {
  layout: PropTypes.string.isRequired,
  limit: PropTypes.number,
}

LatestByLayout.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestByLayout
