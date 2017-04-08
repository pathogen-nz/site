import React, { PropTypes } from "react"

import MainMenu from "../../components/MainMenu"
import TocMenu from "../../components/TocMenu"
import Header from "../../components/Header"
import BlogHeader from "../../components/BlogHeader"
import PageHeader from "../../components/PageHeader"
import BaseLayout from "../BaseLayout"
import Footer from "../../components/Footer"
import Head from "../../components/Head"
import Scroller from "../../components/Scroller"

const Page = (props) => {
   if (props.style === "blog") {
      return (
        <div id={ "fs-container" } className={ props.head.style }>
          <Head style={ props.head.style } />
          <MainMenu />
          <Header title={ props.head.title } style={ props.head.style } />
          <BlogHeader head={ props.head } />
          <div className="post fade-oc container">
            <div className="row">
              <div className="col-lg-7 col-md-12 offset-lg-1 fade-oc">
                <article>
                  <BaseLayout className="post" { ...props } />
                </article>
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
    else if (props.style === "spread") {
      return (
        <div id={ "fs-container" } className={ props.head.style }>
          <Head style={ props.head.style } />
          <MainMenu />
          <Header title={ props.head.title } style={ props.head.style } />
          <div className="fade-oc">
            <BaseLayout className="home" { ...props } />
          </div>
          <Scroller />
          <Footer />
        </div>
      )
    }
     return (
      <div id={ "fs-container" } className={ props.head.style }>
        <Head style={ props.head.style } />
        <MainMenu />
        <Header title={ props.head.title } style={ props.head.style } />
        <PageHeader head={ props.head } />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 fade-oc">
              <section id="content">
                <article className="page">
                  <BaseLayout className="page" { ...props } />
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

Page.propTypes = {
  head: PropTypes.object.isRequired,
  style: PropTypes.string,
  toc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
}

export default Page
