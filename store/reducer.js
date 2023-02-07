import {AD_DISPLAY, AD_HIDDEN, AD_SHOW, MENU_HIDDEN, MENU_SHOW, NAV_HIDDEN, NAV_SHOW} from "./constants"

const defaultState = {
    Ad_show:false,
    Nav_show:true,
    Ad_display:false,
    Menu_show:true
}
const reducer = (state=defaultState,action)=>{
    const {type} = action
    switch(type) {
        case NAV_SHOW:{
            return {
                ...state,
                Nav_show:true,
            }
        }
        case NAV_HIDDEN:{
            return {
                ...state,
                Nav_show:false,
            }
        }
        case AD_SHOW:{
            return {
                ...state,
                Ad_show:true,
            }
        }
        case AD_HIDDEN:{
            return {
                ...state,
                Ad_show:false,
            }
        }
        case AD_DISPLAY:{
            return {
                ...state,
                Ad_display:true,
            }
        }
        case MENU_SHOW:{
            return {
                ...state,
                Menu_show:true,
            }
        }
        case MENU_HIDDEN:{
            return {
                ...state,
                Menu_show:false,
            }
        }
        default:{
            return state
        }
    }
}
export default reducer