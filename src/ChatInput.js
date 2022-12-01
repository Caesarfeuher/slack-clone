import React, {useEffect, useState} from 'react';
// import { Button } from '@mui/material';
// // import { firebaseApiOrigin } from 'firebase-tools/lib/api';
// import { Collections } from '@mui/icons-material';
import './ChatInput.css';
import {useStateValue} from './StateProvider';
import db from './firebase';
import {getFirestore,collection,addDoc,serverTimestamp } from 'firebase/firestore/lite';
 
  

 function ChatInput({channelName,channelId}) {
  
       const [input,SetInput] = useState("");
       const [{user}] = useStateValue();
       const db = getFirestore();
    // so it does not refresh the page you do this (e)below
           const sendMessage = (e) => {
                e.preventDefault();
                
          const colRef= addDoc(collection(db , "messages"), {
            message:input,
            timestamp:serverTimestamp(),
            user: user.displayName,
            userImage:user.photoURL,
        });
        console.log(colRef)

       
         }
       
      
    return (
      <div className='ChatInput'>
        <form> 
          <input 
          value={input}
          onChange={e => SetInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`} />
          <button type='submit' onClick={sendMessage}>
              SEND
          </button>  
        </form>
      </div>
  )
 
  
 }
 export default ChatInput




