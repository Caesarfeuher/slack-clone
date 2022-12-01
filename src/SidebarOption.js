// import React, {useState, useEffect} from 'react'
import React from 'react'
import './SidebarOption.css'
  import { useNavigate, Link } from 'react-router-dom';
  import db from './firebase';
 import {collection,addDoc } from 'firebase/firestore/lite';


 function SidebarOption({Icon, title, id, addChannelOption, setTitleState}) {
      const navigate = useNavigate();
        const addChannel = () => {
        const channelName = prompt('please enter the channel name')
        addDoc(collection(db, "rooms"), {
           name:channelName,
        });
      }
       return (
    <div>
      <div className='sidebarOption' onClick={addChannelOption ? addChannel : ''}>
        {Icon && <Icon className='sidebarOption__icon' />}
        <Link onClick={() => {setTitleState(title)}}  className='sidebarOption__link' to={`/room/${id}`}>{Icon ? (<h3>{title}</h3> ):<h3 className='sidebarOption__channel'> <span className='sidebarOption__hash'>#</span>{title}</h3>}</Link>
      </div>
    </div>
    );
  }

 export default SidebarOption;
//   const selectChannel = () => {
      //    if (id) {
      //  navigate(`/room/${id}`);
      //   } else {
      //      navigate(title)
      //   }
      //  };

        // const addChannel = () => {
        //   const channelName = prompt('please enter the channel name')
        //     db.collection('rooms').add({
        //      name:channelName,
             
        //      })
        //   }
        
        // let Arr = []

        // const addChannel = () => {
        //  const channelName = prompt('please enter the channel name')
        //   const dataCollections = collection(db, 'rooms').add({name:channelName })
        //   const data =  getDocs(dataCollections)
        //   const result = data.docs.map(doc => doc.data())
        //   result.forEach((data) => {
        //     Arr.push(data)
        //   })
        //   data(Arr)
        // }