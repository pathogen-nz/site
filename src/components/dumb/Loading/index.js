import React from "react"
import Helmet from "react-helmet"
import TopBarProgressIndicator from "react-topbar-progress-indicator"

TopBarProgressIndicator.config({
  barColors: {
    "0": "#fff",
    "1.0": "#f00",
  },
  shadowBlur: 5,
})

const Loading = () => (
  <div>
    <Helmet
      title={ "Loading..." }
    />
    <TopBarProgressIndicator />
    <div>
      <div />
    </div>
  </div>
)

export default Loading
