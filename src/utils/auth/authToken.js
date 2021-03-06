import decode from 'jwt-decode'
import { setItemSync, getItemSync, removeItemSync } from '../storage'

const TOKEN_KEY = 'id_token'

function getTokenExpirationDate(token) {
/* eslint-disable */
  console.log('token', token)
/* eslint-enable */
  const decoded = decode(token)
  if (!decoded.exp) {
    return null
  }

  const date = new Date(0) // The 0 here is the key, which sets the date to the epoch
  date.setUTCSeconds(decoded.exp)
  return date
}

export function isTokenExpired(token) {
  const date = getTokenExpirationDate(token)
  const offsetSeconds = 0
  if (date === null) {
    return false
  }
  return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)))
}

export function setAuthToken(authToken) {
  setItemSync(TOKEN_KEY, authToken)
}

export function getAuthToken() {
  return getItemSync(TOKEN_KEY)
}

export function clearAuthToken() {
  removeItemSync(TOKEN_KEY)
}

export function isAuthenticated() {
  const token = getAuthToken()
  return !!token && !isTokenExpired(token)
}
