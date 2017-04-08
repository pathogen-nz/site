import React, { PropTypes } from "react"

import Page from "../Page"

const Post = (props) => {
  return (
    <Page { ...props } style='blog' />
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post
