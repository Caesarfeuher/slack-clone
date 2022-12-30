import React, { useEffect, useState } from 'react'
import './Chat.css'
import {useParams} from 'react-router-dom';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'; 
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import db from './firebase'
import Message from './Message';
import ChatInput from './ChatInput';
import {collection, query, where, doc, getDocs} from 'firebase/firestore/lite';
// import { RoomService } from '@mui/icons-material';
 
 

 function Chat(props) { 
  const {channels, titleState} = props
   let {id} = useParams()
 const [roomDetails, setRoomDetails] = useState(null)
 const [roomMessages, setRoomMessages] = useState([])
  const { roomId } = useParams();
  // const [clickedTrend, setClickedTrend] = useState({trend: ''})

  const [chats, setChats] = useState([])

async function getData() {
    let Arr = []
    const dataCollections = collection(db, 'messages')
    const data = await getDocs(dataCollections)

    const result = data.docs.map(doc =>

      doc.data({
        id: null,
        chat_source: doc.data().chat_source,
        message: doc.data().message,
        timestamp: doc.data().timestamp,
        user: doc.data().user,
        userImage: doc.data().userImage
      }))

    for (let i = 0; i < result.length; i++) {
      const element = result[i];
      const dataDocs = data.docs[i]
      Arr.push({...element, id: dataDocs.id})
    }
    setChats(Arr)

}
// console.log(chats);


useEffect(() => {
    getData()
  }, [channels])

  return (
   <div className='chat'>
       <div className='chat__header'>
         <div className='chat__headerLeft'>
           <h4 className='chat__channelName'>
              <strong>#{titleState}</strong> 
             <StarBorderOutlinedIcon />
           </h4>
             </div>
             <div className='chat__headerRight'>
               <p>
                 <InfoOutlinedIcon /> Details
               </p>
             </div>
         </div>
        <div className ='chat__messages'>
         {chats.map(({message,timestamp,user,userImage}) => ( 
              <Message 
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}
              />
         ))}   
        </div>

        
        <ChatInput channelName={titleState} channelId={roomId} />
     </div>
   )
 }
export default Chat


