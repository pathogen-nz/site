import React, { PropTypes } from "react"

const CoverTitle = ({title}) => {
  return (
    <h1 className="cover-heading" id="title">{ title }</h1>
  )
}

CoverTitle.propTypes = {
  title : PropTypes.string.isRequired,
}

export default CoverTitle;

