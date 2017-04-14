import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Icon from "../Icon"

const MainMenu = ({ actions, shown }) => {

  let menuClass = (shown) ? 'shown' : ''
  let iconTitle = (shown) ? 'Close the menu' : 'Open the menu'

  return (
    <div id="oc-left-wrapper" className={menuClass}>
      <a
        href={"#hamburger"}
        title={"Close the menu"}
        onClick={actions.closeMenu}
      >
        <span className="oc-overlay left overlay-dark"></span>
      </a>
      <a
        href={"#hamburger"}
        className="oc-toggle left burger"
        id="hamburger"
        title={iconTitle}
        onClick={actions.toggleMenu}
      >
        <Icon name={"menu"} size={38} />
      </a>
      <div id="oc-left" className={"oc-panel bg-thematic"}>
        <div className={"overlay-light"}>
          <h4>{"Documentation"}</h4>
          <ul>
            <li><Link to="/designer">{"For designers"}</Link></li>
            <li><Link to="/developer">{"For developers"}</Link></li>
            <li><Link to="/contribute">{"For contributors"}</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

MainMenu.propTypes = {
  actions: PropTypes.object.isRequired,
  shown: PropTypes.bool.isRequired,
}

export default MainMenu
