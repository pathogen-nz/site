import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import site from "../../config.yml"

export default class Head extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  static propTypes = {
    style: PropTypes.string.isRequired,
  };
  
  render() {
    const { pkg } = this.context.metadata
    const htmlClass = { "class": this.props.style }

    /* eslint-disable react/jsx-key */
    return (
      <div hidden>
        <Helmet
          meta={ [ 
            { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" },
            { name: "theme-color", content: `${ site.theme_settings.theme_color }` }, 
            { name: "msapplication-config", content: `${ site.theme_settings.browser_config }` },
            { name: "keywords", content: `${ site.site_info.keywords }` },
            { name: "description", content: `${ site.site_info.description }` },
            { name: "subject", content: `${ site.site_info.subject }` },
            { name: "copyright", content: `${ site.site_info.copyright }` },
            { name: "language", content: `${ site.site_info.language }` },
            { name: "robots", content: `${ site.theme_settings.robots }` },
            { name: "author", content: `${ site.site_info.author }` },
            { property: "og:site_name", content: pkg.name },
            { name: "twitter:site", content: `@${ site.social.twitter }` },
            // Phenomic generator tag
            // We could leave this out, but we they asked not to so they can run usage statistics
            // So let's be nice
            { name: "generator", content: `${ process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }` },
          ] }

          link={ [
            { rel: "shortcut icon", href: `${ site.theme_settings.favicon }` },
            { rel: "apple-touch-icon", href: `${ site.theme_settings.apple_icon }` },
            { rel: "apple-touch-icon", sizes: "152x152", href: `${ site.theme_settings.apple_icon_152 }` },
            { rel: "apple-touch-icon", sizes: "180x180", href: `${ site.theme_settings.apple_icon_180 }` },
            { rel: "icon", sizes: "192x192", href: `${ site.theme_settings.android_icon }` },
            { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" },
          ] }

          script={ [
            { src: "/assets/js/fs-bundle.js", type: "text/javascript" },
          ] }

          htmlAttributes={ htmlClass }
        />
      </div>
    )
  }
}
