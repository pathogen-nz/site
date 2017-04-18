import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import { isAuthenticated } from './utils/auth/authToken'

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import Homepage from "./layouts/Homepage"
import Post from "./layouts/Post"
import CoverPage from "./layouts/CoverPage"
import CoverApp from "./layouts/CoverApp"


// validate authentication for private routes
/* eslint-disable */
let requireAuth = null
if (typeof window !== 'undefined') {
    requireAuth = (nextState, replace) => {
        if (!isAuthenticated()) {
            replace({ pathname: '/login' })
        }
    }
}

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      Post,
      CoverPage,
      CoverApp,
    }}
  />
)

export default (
    <Route component={ AppContainer }>
        <Route path="profile" component={ PageContainer } onEnter={requireAuth} />
        <Route path="*" component={ PageContainer } />
    </Route>
)
