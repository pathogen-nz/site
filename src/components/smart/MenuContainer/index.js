import { connect } from 'react-redux'
import MainMenu from '../../dumb/MainMenu'
import { bindActionCreators } from 'redux'
import * as Actions from './redux'

/*
  menu state held in single 'menu' object
  this can be passed as a single 'menu' prop, or individually (as below)
*/
const mapStateToProps = (state) => ({
  shown: state.menu.shown
})

/*
  bind all actions as single 'actions' object
*/
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
})

const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu)

export default MenuContainer

