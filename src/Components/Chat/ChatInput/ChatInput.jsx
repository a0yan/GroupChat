import {React,useState,useEffect} from 'react'
import styles from './ChatInput.module.css'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import db from '../../../firebase.js'
import { connect } from 'react-redux';
import axios from 'axios'

const ChatInput = (props) => {
    const [msg, setmessage] = useState('')
    const [emojis,setemojis]=useState([])
    const [emojitoggle,showemojis]=useState(false)
    useEffect(() => {
         axios.get('https://emoji-api.com/emojis?access_key=8d0d628912ddd0d748b907929e609cb9de4cb606').then(res=>{
            setemojis(res.data)
        }
        )

    }, [])
    const sendMessage=(event)=>{
        event.preventDefault()
        console.log(event.target.value===undefined);
        if (event.target.value!==undefined ){
        db.collection('rooms').doc(props.id).collection('messages').add({
            name:props.name,
            message:msg,
            timestamp: new Date().toUTCString(),
            recieved:false
        })}
        setmessage('')
    }
    const keyboardHandler=(event)=>{
        if(event.key==='Enter'){
            sendMessage(event)
        }
    }
    const getEmojihandler=()=>{

      showemojis(!emojitoggle)


    }
    return (
        <div className={styles.ChatInput}>
            <InsertEmoticonIcon className={styles.emoji_button} onClick={()=>getEmojihandler()} />
            <AttachFileIcon className={styles.Clip} />
            <textarea  value={msg} onChange={(event)=>setmessage(event.target.value)}  type='text' placeholder='  Type a message ' className={styles.Inputfield} onKeyDown={(event)=>keyboardHandler(event)}/>
            <button type='submit' onClick={(event)=>{sendMessage(event)}}><SendIcon className={styles.Send} /></button>
            <MicIcon className={styles.Mic} />
            {emojitoggle?
            <div className={styles.emojis}> 
                {emojis.map(item=>
                    <div className={styles.emoji}>{item.character}</div>
                )}
                </div>:null}

        </div>
    )
}
const mapstatetoprops=state=>(
    {
        name:state.user.name
    }
)
export default connect(mapstatetoprops)(ChatInput)
