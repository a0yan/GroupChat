import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.component'
import Chat from './Components/Chat/Chat.jsx'
import {React} from 'react'
import { Route,Switch } from 'react-router';
import Login from './Login.js'
import {connect} from 'react-redux'
function App(props) {
  return (
    <div className="App">
  
    {(!props.id)?<Login/>:(
      <div className="App__body">
      <Sidebar/>
    <Switch>
    <Route path='/rooms/:roomId' component={Chat} />
    <Route path='/' />
    </Switch>
    </div>
    )}
    </div>
    
  );
}
const mapstatetoprops=(state)=>(
  {
    id:state.user.user_id
  }
)

export default connect(mapstatetoprops)(App);
