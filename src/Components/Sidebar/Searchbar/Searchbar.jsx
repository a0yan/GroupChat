import {React} from 'react'
import styles from './Searchbar.module.css'
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core'
import { connect } from 'react-redux';
import {search} from '../../../reducer/user/useractions'
const Searchbar = (props) => {
    const onChangeHandler=(event)=>{
        props.search(event.target.value)
    }
    return (
        <div stateName={styles.Searchbar}>
            <div className={styles.SearchContainer}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input onChange={(event)=>onChangeHandler(event)} className={styles.Searchfield} type='text' placeholder='   Search or start new chat' />
            </div>
        </div>
    )
}
const mapdispatchtoprops=(dispatch)=>(
    {
        search:(val)=>dispatch(search(val))
    }
)
export default connect(null,mapdispatchtoprops)(Searchbar)
