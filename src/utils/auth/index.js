/**
 * Auth0 Lock instance
 */
import { initializeXsrfToken, getXsrfToken } from './xsrfToken'
import site from "../../config.yml"
let Auth0Lock
let lockInstance // eslint-disable-line

if (typeof window !== 'undefined') {
  Auth0Lock = require('auth0-lock').default // eslint-disable-line
  // init token
  initializeXsrfToken()
  const redirect = encodeURIComponent(window.location.href)
  const redirectURL = `${window.location.origin}/loading/`
  const state = `token=${getXsrfToken()}&url=${redirect}&other=lol`
/* eslint-disable */
  console.log('state', state)
/* eslint-enable */
  // Configure Auth0
  lockInstance = new Auth0Lock( // eslint-disable-line
    site.auth0.client_id,
    site.auth0.domain, {
      auth: {
        redirectUrl: redirectURL,
        responseType: 'token',
        params: {
          state,
          // scope: 'openid email_verified',
        },
      },
      theme: {
        primaryColor: '#000'
      },
      languageDictionary: { }
    })
}

export default lockInstance
