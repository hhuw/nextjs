import {AD_DISPLAY, AD_HIDDEN, AD_SHOW, NAV_HIDDEN, NAV_SHOW} from "./constants"

const defaultState = {
    Ad_show:false,
    Nav_show:true,
    Ad_display:false
}
const reducer = (state=defaultState,action:any)=>{
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
        default:{
            return state
        }
    }
}
export default reducer