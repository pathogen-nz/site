import React, { Component, PropTypes } from "react"

export default class Login extends Component {
  render() {
    return (
            <div>
            <p className="lead mt-3">{ this.props.msg }</p>
            <p className="mt-4">
                <a className="btn btn-lg btn-primary ml-1 mr-1 mt-2" href="https://docs.freesewing.org/demo/">{"Try the demo"}</a>
                <a className="btn btn-lg btn-primary ml-1 mr-1 mt-2" href="https://github.com/freesewing/core">{"Fork on GitHub"}</a>i
                <br />
                {"or "}<a href={"#"} className="to-post">{"read more"}</a>
            </p>
                  </div>
    )
  }
}

Login.propTypes = {
  msg : PropTypes.string.isRequired,
}

