import React, { Component, PropTypes } from "react"

export default class Icon extends Component {

  render() {
    let iconClass = "fa fa-"+this.props.name 
    return (
            <i className={ iconClass } aria-hidden="true" />
        )
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

