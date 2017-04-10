import React, { PropTypes } from "react"
import { Link } from "phenomic"

import MainMenu from "../../components/dumb/MainMenu"
import Head from "../../components/dumb/Head"
import BaseLayout from "../BaseLayout"
import CoverTitle from "../../components/dumb/CoverTitle"

const CoverPage = (props) => {
     return (
       <div id={ "fs-container" } className={"cover-wrap bg-thematic"}>
         <Head style={ "cover" } />
         <MainMenu />
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

CoverPage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default CoverPage
