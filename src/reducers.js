/* eslint-disable */
const reducer = (state = {shown: false}, action) => {
  switch (action.type) {
    case 'freesewing-site/menus/TOGGLE_MENU':
        console.log('Logging state in TOGGLE_MENU action');
        console.log(state)
        return Object.assign({}, state, {
          shown: !state.shown
        })
    default:
        console.log('Default state in TOGGLE_MENU action');
        console.log('Default state in TOGGLE_MENU action');
        console.log(state)
      return state
  }
}

export default reducer
/* eslint-enable */
