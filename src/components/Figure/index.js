import React, { Component, PropTypes } from "react"
import Link from "react-router/lib/Link"
import Icon from "../Icon"

export default class Figure extends Component {

  render() {
    return (
            <figure className="image">
                <img 
                  className="img img-responsive drop-shadow"
                  src={ this.props.image }
                  alt={ this.props.caption }
                />
                <figcaption>
                    { this.props.caption }
                    { " " }
                    <Link href={ this.props.image } target="_BLANK">
                        <Icon name="external-link" />
                    </Link>
                </figcaption>
            </figure>
        )
  }
}

Figure.propTypes = {
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
}

