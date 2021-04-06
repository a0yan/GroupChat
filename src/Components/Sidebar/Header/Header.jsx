import React from 'react'
import Options from './Options/Options'
import styles from './Header.module.css'
import {Avatar} from '@material-ui/core'
const Header = () => {
    return (
        <div className={styles.Header}>
        <Avatar src='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ecebee7938ec500060ab34f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1064%26cropX2%3D3400%26cropY1%3D702%26cropY2%3D3039'/>
        <Options/>           
        </div>
    )
}
export default Header
