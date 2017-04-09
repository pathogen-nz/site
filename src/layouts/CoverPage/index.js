import React, { PropTypes } from "react"
import Link from "react-router/lib/Link"

import MainMenu from "../../components/MainMenu"
import Head from "../../components/Head"
import BaseLayout from "../BaseLayout"
import CoverTitle from "../../components/CoverTitle"

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
