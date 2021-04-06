import {React,useState,useEffect} from 'react'
import styles from './Sidebar.module.css'
import Header from './Header/Header'
import Searchbar from './Searchbar/Searchbar'
import SidebarChat from './Sidebar_chat/Sidebar_chat'
import db from "../../firebase";
import { connect } from 'react-redux'
const Sidebar = (props) => {
    const [rooms, setrooms] = useState([])
    useEffect(() => {
        const unsubscribe=db.collection('rooms').onSnapshot(snapshot=>{
            setrooms(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()})))})
        return ()=>{
            unsubscribe()
        }
    }, [props.query])
    return (
        <div className={styles.Sidebar}>
            <Header/>
            <Searchbar/>
            <SidebarChat Addchat/>
            {props.query.length===0?(rooms.map(room=>(
                <SidebarChat key={room.id} id={room.id} name={room.data.name} />
            ))):(
                rooms.filter((item)=>{
                    return(item.data.name.indexOf(props.query)!==-1)
                }).map(room=>(
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                )))}
        </div>            
    )
}
const mapstatetoprops=state=>(
    {
        query:state.user.searchq
    }
)
export default connect(mapstatetoprops)(Sidebar)
