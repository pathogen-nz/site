import React, { PropTypes } from "react"

import Container from "./components/smart/Container"

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
