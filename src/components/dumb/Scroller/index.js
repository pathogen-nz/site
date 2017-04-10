import React from "react"
import { Link } from "phenomic"
import Icon from "../Icon"

const Scroller = () => {

    return (
      <div id="scroller" >
        <Link to={"#top"} className="scroll-to-top" title="Back to top">
          <Icon name={"up"} size={38}/>
        </Link>
      </div>
    )
}

export default Scroller
