import React, { PropTypes } from "react"

import MainMenu from "../../components/MainMenu"
import TocMenu from "../../components/TocMenu"
import Header from "../../components/Header"
import BaseLayout from "../BaseLayout"
import Footer from "../../components/Footer"
import Head from "../../components/Head"
import Figure from "../../components/Figure"
import Scroller from "../../components/Scroller"

const Page = (props) => {
   if (props.head.style === "blog") {
      return (
        <div id={ "fs-container" } className={ props.head.style }>
          <Head style={ props.head.style } />
          <MainMenu />
          <Header title={ props.head.title } style={ props.head.style } />
          <div className="post fade-oc container">
            <div id="posthead" className="row mt-5">
              <div className="col-md-8 col-lg-8 offset-lg-2 offset-md-2 mb-5">
                <article>
                  <Figure image={ props.head.image } caption={ props.head.caption } />
                  <h1 className="post">{ props.head.title }</h1>
                </article>
              </div>
            </div>
            <div id="post" className="row mb-5">
              <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 mb-5">
                <article>
                  <BaseLayout className="page" { ...props } />
                </article>
              </div>
            </div>
          </div>
          <Scroller />
          <Footer />
        </div>
      )
    }
    else if (props.head.style === "spread") {
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
  toc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
}

export default Page
