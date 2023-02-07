import { NAV_SHOW,NAV_HIDDEN, AD_SHOW, AD_HIDDEN, AD_DISPLAY, MENU_SHOW, MENU_HIDDEN} from "./constants"
export const NavShow = ()=>({type:NAV_SHOW})
export const NavHidden = ()=>({type:NAV_HIDDEN})
export const AdShow = ()=>({type:AD_SHOW})
export const AdHidden = ()=>({type:AD_HIDDEN})
export const AdDisplay = ()=>({type:AD_DISPLAY})
export const MenuShow = ()=>({type:MENU_SHOW})
export const MenuHidden = ()=>({type:MENU_HIDDEN})