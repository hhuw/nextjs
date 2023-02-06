import { NAV_SHOW,NAV_HIDDEN, AD_SHOW, AD_HIDDEN, AD_DISPLAY} from "./constants"
export const NavShow = ()=>({type:NAV_SHOW})
export const NavHidden = ()=>({type:NAV_HIDDEN})
export const AdShow = ()=>({type:AD_SHOW})
export const AdHidden = ()=>({type:AD_HIDDEN})
export const AdDisplay = ()=>({type:AD_DISPLAY})
// export const OpenLoginPage = ()=>({type:OPEN_LOGINPAGE})
// export const InitAccount = uid=>({type:INIT_UID,uid})
// export const InitMp3List = list=>({type:INIT_MP3_LIST,mp3list:list})
// export const AddMp3List = list=>{
//     const newlist = []
//     return ({type:ADD_MP3_LIST,mp3list:newlist})
// }
// export const DeleteMp3List = list=>{
//     const newlist = []

//     return ({type:DELETE_MP3_LIST,mp3list:newlist})
// }