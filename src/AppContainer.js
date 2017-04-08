import React, { PropTypes } from "react"

import Container from "./components/Container"

import "./js/fs.js"

import "./sass/main.scss"

const AppContainer = (props) => (
  <Container>
      { props.children }
  </Container>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
