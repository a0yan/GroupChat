import { Button } from '@material-ui/core'
import React from 'react'
import styles from './Login.module.css'
import {auth,provider} from './firebase'
import {add_user} from './reducer/user/useractions'
import { connect } from 'react-redux'
export const Login = (props) => {
    const signIn=()=>{
        auth.signInWithPopup(provider).then(result=>{
            props.add_usr(result)
        })
        .catch(err=>alert(err.message))
    }
    return (
        <div className={styles.Login}>
            <div className={styles.Login_text}>
                <h1>Sign in to Whatsapp </h1>
            </div>
            <Button style={{color:'white',backgroundColor:'#4AC959'}} onClick={signIn}>Sign In With Google</Button>            
        </div>
    )
}
const mapdispatchtoprops=(dispatch)=>({
    add_usr:(id)=>dispatch(add_user(id))
})
export default connect(null,mapdispatchtoprops)(Login)