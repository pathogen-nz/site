import React, { PropTypes } from "react"

import LatestPosts from "../../components/LatestPosts"
import LatestPages from "../../components/LatestPages"
import MainMenu from "../../components/MainMenu"
import Header from "../../components/Header"
import BaseLayout from "../BaseLayout"
import Footer from "../../components/Footer"
import Head from "../../components/Head"

const Homepage = (props) => {
  return (
      <div id={ "fs-container" } className={ props.head.style }>
        <Head style={ props.head.style } />
        <MainMenu />
        <Header title={ props.head.title } style={ props.head.style } />
        <div className="container">
          <BaseLayout className="page" { ...props } />
          <div className="row">
            <div className="col-md-6">
              <LatestPages />
            </div>
            <div className="col-md-6">
              <LatestPosts />
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
