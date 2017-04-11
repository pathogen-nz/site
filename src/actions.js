/* Action types */

const TOGGLE_MENU = 'freesewing-site/menus/TOGGLE_MENU'

/* action creators */

export const toggleMenu = (shown) => ({
  type: TOGGLE_MENU, 
  shown 
})
