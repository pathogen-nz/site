import { connect } from 'react-redux'
import { toggleMenu } from '../../../actions'
import MainMenu from '../../dumb/MainMenu'

const mapStateToProps = (state) => ({
  shown: state.shown
})

const mapDispatchToProps = (dispatch) => ({
  onClick: (shown) => {
    dispatch(toggleMenu(shown))
  }
})

const MenuContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(MainMenu)

export default MenuContainer

