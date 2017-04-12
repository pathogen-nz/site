import React, { PropTypes } from "react"
import Icon from "../Icon"

const TocMenu = ({ actions, shown, toc }) => {

    let tocClass = (shown) ? 'shown' : ''
    return (
        <div id="oc-right-wrapper" className={tocClass}>
            <a
                href={"#tocburger"}
                className="oc-toggle right burger"
                id="tocburger"
                onClick={actions.toggleToc}
            >
                <Icon name={"toc"} size={38} />
            </a>
            <span className="oc-overlay right"></span>
            <aside id="toc" className="sticky">
                <div id="oc-right" className="oc-panel">
                    <h3 id="toc-title" name="toc" className="mt-5">{ "Contents" }</h3>
                    <div id="toc-ul" className="toc" dangerouslySetInnerHTML={ { __html: toc } } />
                </div>
            </aside>
        </div> 
    )
}

TocMenu.propTypes = {
  actions: PropTypes.object.isRequired,
  shown: PropTypes.bool.isRequired,
  toc: PropTypes.string,
}

export default TocMenu

