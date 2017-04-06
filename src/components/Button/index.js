import React, { PropTypes } from "react"
import cx from "classnames"

const Button = ({ className, ...otherProps }) => (
  <span
    role="button"
    { ...otherProps }
    className={ cx({
      [className]: className,
    }) }
  />
)

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Button.displayName = "Button"

export default Button
