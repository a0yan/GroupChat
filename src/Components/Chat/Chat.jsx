import {React,useEffect,useState} from 'react'
import styles from './Chat.module.css'
import ChatHeader from './ChatHeader/ChatHeader'
import ChatBody from './ChatBody/ChatBody'
import ChatInput from './ChatInput/ChatInput'
import {useParams} from 'react-router-dom'
import db from '../../firebase'
const Chat = (props) => {
    const {roomId}=useParams()
    const [roomName, setroomName] = useState('')
    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot=>{
                setroomName(snapshot.data().name)
            })
        }
    }, [roomId])
    const [messages, setmessages] = useState([])
    useEffect(() => {
        const unsub=db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp').onSnapshot(ss=>{
            setmessages(ss.docs.map(doc=>(
                { 
                    ...doc.data(),
                    id:doc.id
                }
            )))
        })
        return ()=>{
            unsub()
        }
        }
        
    , [roomId])
    return (
        <div className={styles.Chat}>
            <ChatHeader id={roomId} name={roomName} last_message={messages[messages.length-1]} />
            <ChatBody id={roomId} messages={messages} />
            <ChatInput id={roomId} />
        </div>
    )
}

export default Chat
