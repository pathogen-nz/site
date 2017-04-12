import { connect } from 'react-redux'
import TocMenu from '../../dumb/TocMenu'
import { bindActionCreators } from 'redux'
import * as Actions from './redux'

/*
  menu state held in single 'toc' object
  this can be passed as a single 'toc' prop, or individually (as below)
*/
const mapStateToProps = (state) => ({
  shown: state.toc.shown
})

/*
  bind all actions as single 'actions' object
*/
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
})

const TocContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TocMenu)

export default TocContainer

