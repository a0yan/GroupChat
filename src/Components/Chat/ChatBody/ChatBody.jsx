import {React} from 'react'
import styles from './Chatbody.module.css'
import ChatMessage from './ChatMessage/ChatMessage'
const ChatBody = (props) => {
    return (
        <div className={styles.ChatBody}>
            {props.messages.map(msg=>(
                <ChatMessage key={msg.id} name={msg.name} message={msg.message} recieved={msg.recieved} timestamp={msg.timestamp}/>
            ))}
        </div>
    )
}

export default ChatBody
