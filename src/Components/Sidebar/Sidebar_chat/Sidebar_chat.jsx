import {React,useState,useEffect} from 'react'
import styles from './Sidebar_chat.module.css'
import { Avatar } from '@material-ui/core'
import db from '../../../firebase'
import { Link } from 'react-router-dom'
const Sidebar_chat = (props) => {
    const [seed, setSeed] = useState(0)

    useEffect(() => {
        setSeed(Math.floor(Math.random()*100))
    }, [])
    const createnewchat=()=>{
        const roomName=prompt("Please enter room name")
        if (roomName){
            db.collection('rooms').add({
                name:roomName
            })  }
     }
     const [messages, setmessages] = useState([])
    useEffect(() => {
        const unsub=db.collection('rooms').doc(props.id).collection('messages').orderBy('timestamp').onSnapshot(ss=>{
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
    , [props.id])
    return !props.Addchat? (
        <Link to={`/rooms/${props.id}`} className={styles.link}>
        <div className={styles.Sidebar_chat}>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className={styles.Sidebar_Container}>
                <h4>{props.name}</h4>
                <p>{messages.length?messages[messages.length-1].message:'No messages'}</p>
            </div>
        </div>
        </Link>
    ):(
        <div onClick={createnewchat} className={styles.Sidebar_chat}>
            <div className={styles.Sidebar_Container}> <h4>Add New Chat</h4></div>
        </div>
    )
}
export default Sidebar_chat
