import React, { PropTypes } from "react"
import { Link } from "phenomic"

import MenuContainer from "../../components/smart/MenuContainer"
import Head from "../../components/dumb/Head"
import BaseLayout from "../BaseLayout"
import CoverTitle from "../../components/dumb/CoverTitle"

const CoverApp = (props) => {
   if (props.head.action === "login") {
     return (
       <div id={ "fs-container" } className={"cover-wrap bg-thematic"}>
         <Head style={ "cover" } />
         <MenuContainer />
         <div className={"cover-body"}>
            <p className="lead mt-3">{"Handle login here"}</p>
        </div>
        <div className="cover-bottom">
            <div id="copyright">
                <p id="raquo"><Link to="/" className="to-post noline">{"Home"}</Link></p>
            </div>
        </div>
    </div>
    )
   } else {
     return (
       <div id={ "fs-container" } className={"cover-wrap bg-thematic"}>
         <Head style={ "cover" } />
         <MenuContainer />
         <div className={"cover-body"}>
            <CoverTitle title={ props.head.title } />
            <p className="lead mt-3">{ props.head.subtitle }</p>
            <BaseLayout className="post" { ...props } />
        </div>
        <div className="cover-bottom">
            <div id="copyright">
                <p id="raquo"><Link to="/" className="to-post noline">{"Home"}</Link></p>
            </div>
        </div>
    </div>
    )
    }
}

CoverApp.propTypes = {
  head: PropTypes.object.isRequired,
}

export default CoverApp
