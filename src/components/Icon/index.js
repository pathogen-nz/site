import React, { Component, PropTypes } from "react"

export default class Icon extends Component {

  render() {
    // More at: https://github.com/icons8/flat-color-icons 
    const icons = {
      'heart': <path className={"outline"} d={"M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"} />,
      'menu': <g><rect x={"6"} y={"22"} width={"36"} height={"4"} /><rect x={"6"} y={"10"} width={"36"} height={"4"} /><rect x={"6"} y={"34"} width={"36"} height={"4"} /></g>,
    }


    const size = this.props.size || 32
    return (
      <svg className={ this.props.name } xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 48 48" aria-labelledby="title">
        <title id="title">{ this.props.name }{" icon"}</title>
        {icons[this.props.name]}
      </svg>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
}

