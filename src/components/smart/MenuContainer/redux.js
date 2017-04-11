/*
    redux 'ducks' pattern: https://github.com/erikras/ducks-modular-redux

    the reducer is exported with the name of the object that 
    we pass into the store not as the 'default' export 
    (as that will be the name we want it to appear with in the store)
*/

/* Action Types */

const TOGGLE_MENU = 'freesewing-site/menus/TOGGLE_MENU'

/* Reducer */

export const menu = (state = { shown: false }, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return Object.assign({}, state, {
                shown: !state.shown
            })
        default:
            return state
    }
}

/* Action Creators */

export const toggleMenu = () => ({
    type: TOGGLE_MENU,
})