import React, { Component, PropTypes } from "react"

export default class CoverTitle extends Component {
  render() {
    return (
      <h1 className="cover-heading" id="title">{ this.props.title }</h1>
    )
  }
}

CoverTitle.propTypes = {
  title : PropTypes.string.isRequired,
}

