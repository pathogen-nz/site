import { combineReducers } from "redux"
import createStore from "phenomic/lib/redux/createStore"
// eslint-disable-next-line import/no-namespace
import * as phenomicReducers from "phenomic/lib/redux/modules"
import * as menu from './components/smart/MenuContainer/redux'
import * as toc from './components/smart/TocContainer/redux'

/*
  import and pass entire redux 'duck' into the store
  with the name we have defined in the redux 'duck' to
  ensure consistency, and that all state properties are 
  grouped with properties of similar usage
*/
const store = createStore(
  combineReducers({
    ...phenomicReducers,
    ...menu,
    ...toc,
  }),
  { ...(typeof window !== "undefined") && window.__INITIAL_STATE__ },
)

export default store
