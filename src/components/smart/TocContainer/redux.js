/*
    redux 'ducks' pattern: https://github.com/erikras/ducks-modular-redux

    the reducer is exported with the name of the object that 
    we pass into the store not as the 'default' export 
    (as that will be the name we want it to appear with in the store)
*/

/* Action Types */

const TOGGLE_TOC = 'freesewing-site/tocs/TOGGLE_TOC'

/* Reducer */
export const toc = (state = { shown: false }, action) => {
    switch (action.type) {
        case TOGGLE_TOC:
            return Object.assign({}, state, {
                shown: !state.shown
            })
        default:
            return state
    }
}

/* Action Creators */

export const toggleToc = () => ({
    type: TOGGLE_TOC,
})
