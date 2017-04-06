import React from "react"

const Footer = () => (
  <footer>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p>
      <a
        href={ process.env.PHENOMIC_HOMEPAGE }
      >
        { "Website generated with " }
        <span>
          {  `<${ process.env.PHENOMIC_NAME} />` }
        </span>
      </a>
    </p>
  </footer>
)

export default Footer
