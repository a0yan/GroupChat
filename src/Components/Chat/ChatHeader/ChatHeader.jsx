import { Avatar } from '@material-ui/core'
import {React,useState,useEffect} from 'react'
import styles from './ChatHeader.module.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core'
const ChatHeader = (props) => {
    const [seed, setseed] = useState(0)
    useEffect(() => {
        setseed(Math.floor(Math.random()*100))
    }, [props.id])
    return (
        <div className={styles.ChatHeader}>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className={styles.Container}>
                <h3>{props.name}</h3>
                <p>Last Message at {props.last_message?props.last_message.timestamp:'0000'}</p>
            </div>
            <div className={styles.Options}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default ChatHeader
