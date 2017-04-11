import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Icon from "../Icon"

const MainMenu = ({shown, onClick}) => {
    
  let menuClass = ''
  if(shown) { menuClass = 'shown' }
  /* eslint-disable */
  console.log(shown) 
  return (
    <div id="oc-left-wrapper">
      <span className="oc-overlay"></span>
      <Link 
        to={"#"} 
        className="oc-toggle left burger" 
        id="hamburger" 
        onClick={e => {
          console.log('Menu icon clicked')
          e.preventDefault()
          onClick('main')
        }}
      > 
        <Icon name={"menu"} size={38} />
      </Link>
      <div id="oc-left" className={"oc-panel " + menuClass} data-side="left">
        <h4>{ "Documentation" }</h4>
        <ul>
          <li><Link to="/designer">{ "For designers" }</Link></li>
          <li><Link to="/developer">{ "For developers" }</Link></li>
          <li><Link to="/contribute">{ "For contributors" }</Link></li>
        </ul>
      </div> 
    </div> 
  )
  /* eslint-enable */
}

MainMenu.propTypes = {
  shown: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default MainMenu
