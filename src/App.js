import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// commented useparams out of RRD
import Chat from './Chat';
import './App.css';
import db from "./firebase"
import {collection, getDocs } from 'firebase/firestore/lite';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
  const [channels, setChannels] = useState([]);
  // const  [user, setUser] = useState(null)
  const [{user}, dispatch] = useStateValue();

async function getData() {
    let Arr = []
    const dataCollections = collection(db, 'rooms')
    const data = await getDocs(dataCollections)

    const result = data.docs.map(doc =>

      doc.data({
        id: null,
        name:doc.data().name
      }))

    for (let i = 0; i < result.length; i++) {
      const element = result[i];
      const dataDocs = data.docs[i]
      Arr.push({...element, id: dataDocs.id})
    }
    setChannels(Arr)
}
const [titleState, setTitleState] = useState()
useEffect(() => {
    getData()
  }, [channels])
  return (
    <div className="App"> 
    <Router>
      {/* if no user show login page otherwise show app */}
      {!user ? (
         <Login />
      ): (

      
      <>
    <Header />
    <div className='app__body'>
      <Sidebar titleState={titleState} setTitleState={setTitleState} />
       <Routes> 
      
       <Route path='/room/:id'  element={<Chat titleState={titleState} channels={channels} />} /> 
        <Route exact path='/' />  
        {/* <Route path='/'  element={<firebase />} /> */}
      </Routes>
      </div>
      </>
      )}
      </Router>
    </div>
  );
}

export default App;


