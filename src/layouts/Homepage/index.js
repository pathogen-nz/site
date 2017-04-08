import React, { PropTypes } from "react"

import LatestPosts from "../../components/LatestPosts"
import LatestPages from "../../components/LatestPages"
import MainMenu from "../../components/MainMenu"
import Header from "../../components/Header"
import BaseLayout from "../BaseLayout"
import Footer from "../../components/Footer"
import Head from "../../components/Head"
import Icon from "../../components/Icon"

const Homepage = (props) => {
  return (
      <div id={ "fs-container" } className={ props.head.style }>
        <Head style={ props.head.style } />
        <MainMenu />
        <Header title={ props.head.title } style={ props.head.style } />
        <p>{"Here comes an icon"}</p>
        <Icon name='heart' size="128" />
        <Icon name='menu' size="128" />
        <p>{"icon out"}</p>
        <BaseLayout className="page" { ...props } />
        <LatestPages />
        <LatestPosts />
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
