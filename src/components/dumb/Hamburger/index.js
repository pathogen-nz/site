import React from "react"
import { Link } from "phenomic"
import Icon from "../Icon"

const Hamburger = (active, onClick) => {

  if(active) {
    return (
      <Link to={"#"} className="oc-toggle left burger active" id="hamburger" onClick={e => {
        e.preventDefault()
          onClick()
        }}>
        <Icon name={"up"} size={38}/>
      </Link>
    )
  } else {
    return (
      <Link to={"#"} className="oc-toggle left burger inactive" id="hamburger" onClick={e => {
        e.preventDefault()
          onClick()
        }}>
        <Icon name={"menu"} size={38}/>
      </Link>
    )
  }
}

Hamburger.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Hamburger
