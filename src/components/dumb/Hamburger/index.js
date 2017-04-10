import React from "react"
import { Link } from "phenomic"
import Icon from "../Icon"

const Hamburger = () => {

  return (
          <Link to={"#"} className="oc-toggle left burger" id="hamburger">
              <Icon name={"menu"} />
          </Link>
      )
}

export default Hamburger
