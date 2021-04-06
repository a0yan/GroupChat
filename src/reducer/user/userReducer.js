import {ADD_USER,SEARCH} from './usertypes'
const initial_state={
    user_id:null,
    name:'',
    searchq:''
}
const userReducer=(state=initial_state,action)=>{
    switch(action.type){
        case(ADD_USER):
            return(
                {
                    ...state,
                    user_id:action.payload.credential.idToken,
                    name:action.payload.additionalUserInfo.profile.name
                }
            )
        case(SEARCH):
            return(
                {
                    ...state,
                    searchq:action.payload
                }
            )
                
        default:
            return state
    }
}
export default userReducer