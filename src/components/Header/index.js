import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"

const Header = (props, { metadata: { pkg } }) => (
  <header>
    <nav>
      <div>
        <Link
          to={ "/" }
        >
          { "Home" }
        </Link>
      </div>
      <div>
        {
          pkg.twitter &&
          <a
            href={ `https://twitter.com/${pkg.twitter}` }
          >
            <Svg svg={ twitterSvg } cleanup />
            { "Twitter" }
          </a>
        }
        {
          pkg.repository &&
          <a
            href={ pkg.repository }
          >
            <Svg svg={ gitHubSvg } cleanup />
            { "GitHub" }
          </a>
        }
      </div>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
