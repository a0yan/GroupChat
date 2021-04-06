import React from 'react'
import styles from './ChatMessage.module.css'
const ChatMessage = (props) => {
    const classes=[styles.ChatMessage]
    if(props.recieved===false){
        classes.push(styles.Sent)
    }
    return (
        <p className={classes.join(' ')}>
            <span className={styles.Name}>{props.name}</span>
            <span className={styles.Message}>{props.message}</span>
            <span className={styles.Time}>{props.timestamp}</span>
        </p>
    )
}

export default ChatMessage
