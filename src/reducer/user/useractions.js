import {ADD_USER,SEARCH} from './usertypes'
const add_user=(token)=>{
    return(
        {
            type:ADD_USER,
            payload:token
        }
    )

}
const search=(value)=>{
    return(
        {
            type:SEARCH,
            payload:value
        }
    )
}
export {add_user,search}