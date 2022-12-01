import React,{useState, useEffect} from 'react'
import './Sidebar.css'
import './SidebarOption.css';
import SidebarOption from './SidebarOption';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import db from "./firebase"
import {collection, getDocs } from 'firebase/firestore/lite';
import {useStateValue} from './StateProvider';
// import Chat from './Chat';



function Sidebar(props) {
  const {titleState, setTitleState}= props
const [channels, setChannels] = useState([]);
 const [{user}]=useStateValue();

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
useEffect(() => {
    getData()
  }, [channels])


  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__info'>
        <h2>dinario</h2>
        <h3>
            <FiberManualRecordRoundedIcon />
            {user?.displayName}
        </h3>
        </div>
            <CreateIcon />
            
      </div>
        <SidebarOption Icon={InsertCommentIcon} title='Threads' />
        {/* <SidebarOption title='Youtube' /> */}
        <SidebarOption Icon={InboxIcon} title='Mention & reactions' />
        <SidebarOption Icon={DraftsIcon} title='Saved items' />
        <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser' />
        <SidebarOption Icon={PeopleAltIcon} title='People & user groups' />
        <SidebarOption Icon={AppsIcon} title='Apps' />
        <SidebarOption Icon={FileCopyIcon} title='File browser' />
        <SidebarOption Icon={ExpandLessIcon} title='Show less' />
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title='Show more' />
        <hr />
        <SidebarOption Icon={AddIcon} addChannelOption title='Add Channel' />
        {channels.map(channel => (
          <SidebarOption setTitleState={setTitleState} title={channel.name} id={channel.id} />
        ))}

{/* <SidebarOption title= {setChannels.map(createChannel)}/> */}
        
    </div>
  )
}

export default Sidebar;
// console.log(channels);

  //  function createChannel(data, index){
  //    return <Sidebar key={index} id={index} message={data.message} timestamp={data.timestamp} user={data.user} userImage={user.Image} />
  //  }
  

//   function createVideo(data, index) {
//     return <Video key={index} id={index} url={data.url} channel={data.channel} description={data.description} song={data.song} likes={data.likes} messages={data.messages} shares={data.shares}/>
//   }

//  useEffect(() => {
//     db.collection('rooms').onSnapshot((snapshot) => {
//    setChannels( 
//     snapshot.docs.map((doc) => ({
//       id: doc.id,
//       name:doc.data().name,
//     }))
//   )
//   });
//   },[]);