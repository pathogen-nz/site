import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { BodyContainer, joinUri } from "phenomic"

class BaseLayout extends Component {
  render() {
    const { props, context } = this
    const { pkg } = context.metadata

    const {
            __filename,
            __url,
            head,
            body,
            header,
            footer,
        } = props
    
    invariant(
            typeof head.title === "string",
            `Your page '${ __filename }' needs a title`
        )

    const metaTitle = head.metaTitle ? head.metaTitle : head.title

    const meta = [
            { property: "og:type", content: "article" },
            { property: "og:title", content: metaTitle },
      {
        property: "og:url",
        content: joinUri(process.env.PHENOMIC_USER_URL, __url),
      },
            { property: "og:description", content: head.description },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:title", content: metaTitle },
            { name: "twitter:creator", content: `@${ pkg.twitter }` },
            { name: "twitter:description", content: head.description },
            { name: "description", content: head.description },
    ]

    return (
            <div className={ props.className } >
                <Helmet title={ metaTitle } meta={ meta } />
                {
                  body &&
                  <BodyContainer>{ body }</BodyContainer>
                }
                { header }
                { props.children }
                { footer }
           </div>
        )
  }
}

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  __filename: PropTypes.string,
  __url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
  className: PropTypes.string,
}

BaseLayout.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default BaseLayout
