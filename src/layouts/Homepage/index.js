import React, { PropTypes } from "react"

import LatestByLayout from "../../components/dumb/LatestByLayout"
import MainMenu from "../../components/dumb/MainMenu"
import Header from "../../components/dumb/Header"
import BaseLayout from "../BaseLayout"
import Footer from "../../components/dumb/Footer"
import Head from "../../components/dumb/Head"

const Homepage = (props) => {
  return (
      <div id={ "fs-container" } className={ props.head.style }>
        <Head style={ props.head.style } />
        <MainMenu />
        <Header title={ props.head.title } style={ props.head.style } />
        <div className="container">
          <BaseLayout className="page" { ...props } />
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-4 offset-lg-3 offset-xl-2">
              <h2>On the blog</h2>
              <LatestByLayout layout={"Post"} />
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <h2>{"Latest pages"}</h2>
              <LatestByLayout layout={"Page"} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
  )
}

Homepage.propTypes = {
  head: PropTypes.object.isRequired,
  toc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
}

export default Homepage
