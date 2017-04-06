import React, { PropTypes } from "react"

import LatestPosts from "../../components/LatestPosts"
import MainMenu from "../../components/MainMenu"
import TocMenu from "../../components/TocMenu"
import Header from "../../components/Header"
import BaseLayout from "../BaseLayout"
import Footer from "../../components/Footer"
import Head from "../../components/Head"
import Scroller from "../../components/Scroller"

const Homepage = (props) => {
  return (
      <div id={ "fs-container" } className={ props.head.style }>
        <Head style={ props.head.style } />
        <MainMenu />
        <Header title={ props.head.title } style={ props.head.style } />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 fade-oc">
              <section id="content">
                <article className="page">
                  <BaseLayout className="page" { ...props } />
                  <LatestPosts />
                </article>
              </section>
            </div>
            <div className="col-lg-4 col-md-12">
              <TocMenu toc={ props.toc } />
            </div>
          </div>
        </div>
        <Scroller />
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
