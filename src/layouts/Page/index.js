import React, { PropTypes } from "react"

import MenuContainer from "../../components/smart/MenuContainer"
import TocContainer from "../../components/smart/TocContainer"
import Header from "../../components/dumb/Header"
import BlogHeader from "../../components/dumb/BlogHeader"
import PageHeader from "../../components/dumb/PageHeader"
import BaseLayout from "../BaseLayout"
import Footer from "../../components/dumb/Footer"
import Head from "../../components/dumb/Head"

import Login from "../../components/Login"

const Page = (props) => {
   if (props.style === "blog") {
      return (
        <div id={ "fs-container" } className={ props.head.style }>
          <Head style={ props.head.style } />
          <MenuContainer />
          <Header />
          <BlogHeader head={ props.head } />
          <div className="post container">
            <div className="row">
              <div className="col-lg-7 col-md-12 offset-lg-1">
                <Login auth={props.route.auth} />
                <article>
                  <BaseLayout className="post" { ...props } />
                </article>
              </div>
              <div className="col-lg-4 col-md-12">
                <TocContainer toc={ props.toc } />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )
    }
    else if (props.style === "spread") {
      return (
        <div id={ "fs-container" } className={ props.head.style }>
          <Head style={ props.head.style } />
          <MenuContainer />
          <Header />
          <BaseLayout className="home" { ...props } />
          <Footer />
        </div>
      )
    }
     return (
      <div id={ "fs-container" } className={ props.head.style }>
        <Head style={ props.head.style } />
        <MenuContainer />
        <Header />
        <PageHeader head={ props.head } />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <section id="content">
                <article className="page">
                  <BaseLayout className="page" { ...props } />
                </article>
              </section>
            </div>
            <div className="col-lg-4 col-md-12">
              <TocContainer toc={ props.toc } />
            </div>
          </div>
        </div>
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
  route: PropTypes.object,
}

export default Page
